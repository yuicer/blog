---
title: Websocket
tag: 砖头
date: 2019/01/08 09:53:09
---

<!-- more -->

好久没有写积累的东西了，都是零零点点的。今天花点时间整理一下关于 websocket 的东西，以下都属于自己的一些理解

### websocket 是什么

webscoket 实际上是一种传输协议，它可以实现前后端的全双工协议传输。即可以实现传统的前端向后端传输，也可以由服务端主动的向前端发送。它和 http 协议没有特别多的交集，只有在建立连接的时候会使用 http 去升级协议。

### websocket 和其他的方案对比

#### 轮询

轮训就是最原始的实现方案了。。。

#### 长轮询

请求发出后，会被服务端 hold 住，此时一直处于 pending 状态，直到有数据返回或者超时再开启下一次。

#### server send events

额。。不是很了解【之后再补充】

### websocket 请求协议

- [以 socket.io 为例子](https://socket-io-chat.now.sh/)，chrome 环境

```
general:
  Request URL: wss://socket-io-chat.now.sh/socket.io/?EIO=3&transport=websocket&sid=DrOBxwSloVfVqwNzAFZF
  Request Method: GET
  Status Code: 101 Switching Protocols

Response Headers
  cache-control: s-maxage=0
  CF-RAY: 495d0c3c9c6a9bb7-SJC
  Connection: upgrade
  Date: Tue, 08 Jan 2019 07:45:59 GMT
  Expect-CT: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
  now: 1
  Sec-WebSocket-Accept: ihMiSxjFOglAVillOgmKTw1gDeQ=
  Sec-WebSocket-Extensions: permessage-deflate; client_no_context_takeover
  Sec-WebSocket-Version: 13
  Server: cloudflare
  Upgrade: websocket
  WebSocket-Server: uWebSockets
  x-now-trace: sfo1

Request Headers:
  Accept-Encoding: gzip, deflate, br
  Accept-Language: zh-CN,zh;q=0.9,en;q=0.8
  Cache-Control: no-cache
  Connection: Upgrade
  Host: socket-io-chat.now.sh
  Origin: https://socket-io-chat.now.sh
  Pragma: no-cache
  Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
  Sec-WebSocket-Key: L9i2lXAHNH6vxZ12RRwcAw==
  Sec-WebSocket-Version: 13
  Upgrade: websocket
  User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3663.0 Safari/537.36

Query String Parameters
  EIO: 3
  transport: websocket
  sid: DrOBxwSloVfVqwNzAFZF
  ?EIO=3&transport=polling&t=MWiRCui&sid=DrOBxwSloVfVqwNzAFZF	?EIO=3&transport=websocket&sid=DrOBxwSloVfVqwNzAFZF
```

注意请求头的 connection 和 upgrade 字段，请求成功后服务端会返回 101 Switching Protocols 来切换协议

。之后的传输都是使用类似与 tcp 的包来直接进行帧传输。可以为二进制 buffer array 或者文本 text/plain 类型

- 以下数据为 chrome 解析出来的 Messages 数据展示

```
  2probe	6	16:46:46.089
  3probe	6	16:46:46.361
  5	1	16:46:46.458
  42["add user","yuicer"]	23	16:46:47.424
  42["login",{"numUsers":18}]	27	16:46:47.626
  42["new message",{"username":"robot","message":"Welcome yuicer"}]	65	16:46:47.927
  42["typing"]	12	16:46:50.795
  42["new message","hah"]	23	16:46:51.344
  42["stop typing"]	17	16:46:51.345
  42["user joined",{"username":"test","numUsers":19}]	51	16:46:57.851
  42["new message",{"username":"robot","message":"Welcome test"}]	63	16:46:58.060
  42["typing",{"username":"test"}]	32	16:47:00.984
```

上面是基于 [engine.io](https://github.com/socketio/engine.io-protocol/blob/master/README.md#packet)的格式遍写的内容
初始的帧格式如下

```
  0                   1                   2                   3
  0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
  +-+-+-+-+-------+-+-------------+-------------------------------+
  |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
  |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
  |N|V|V|V|       |S|             |   (if payload len==126/127)   |
  | |1|2|3|       |K|             |                               |
  +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
  |     Extended payload length continued, if payload len == 127  |
  + - - - - - - - - - - - - - - - +-------------------------------+
  |                               |Masking-key, if MASK set to 1  |
  +-------------------------------+-------------------------------+
  | Masking-key (continued)       |          Payload Data         |
  +-------------------------------- - - - - - - - - - - - - - - - +
  :                     Payload Data continued ...                :
  +---------------------------------------------------------------+
```

### 大规模群消息优化

- 只对在线人群进行广播
- 消息的收发和消息的处理没有强关联
  - 假设有 a ，b 用户，s 服务端，a 发送的消息，经过 ws 收发， a 会立即收到反馈并显示在 a 的 ui 上，然后此消息会经过服务端逻辑处理，如果消息确认无效或没有发送成功，会再发送给 a 一条消息，去标明发送的消息欧问题，此时 a 的 ui 上的这条消息会出现带红色感叹号的提示。同时 b 不会收到该消息。如果该消息为红包类型消息，a 也会立即收到，b 则会在服务端处理相应的逻辑之后才会收到该消息。
  - 总结为，对于发送者和接受者是不同的逻辑，发送方要求实时展示，接收方要求准确无误。
- 如果消息频繁，可将实时发送更改为非实时的间隔段打包发送，即对于在 100ms 内的消息进行打包，然后 100 ms 发送一次。

### socket.io

[官网地址](http://socket.io/)

- 参考连接
  [https://www.jianshu.com/p/a3e06ec1a3a0](https://www.jianshu.com/p/a3e06ec1a3a0)
