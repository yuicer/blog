---
title: http
date: 2023/05/15 20:03:11
tag: 砖头
---

## http
hyper text transform protocal

no state
   session cookie local storage
   long loop | websocket

URI：Uniform Resource Identifier
URL：Uniform Resource Location
   RESTful

header:
content-type

response
set-cookie

https = heep + ssl(secure socket layer)/tls(transport layer security)

http 80
https 443

rsa
1. 客户端发送支持的算法 (client_random,tls version, encryption algorithm)
2. 服务端发回证书和公钥（非对称加密）(server_random,CA,specific tls&algorithm)
3. 客户端证书验证通过用公钥加密一个随机数(pre_random)生成密钥
4. 服务端用私钥解密

后续客户端服务端用三个随机数做最终密钥（对称加密）来后续通信

tls 1.3
1. 客户端发送支持的算法和配置(client_random, client_params, tls version, encryption algorithm)
2. 服务端返回支持的算法和配置(server_random,server_params,CA, tls version, encryption algorithm)
3. 双方利用 client_params server_params, 计算出 pre_random

后续客户端服务端用三个随机数做最终密钥（对称加密）来后续通信

应用层 HTTP、HTTPS、FTP、DNS、SSH
表达层 ASCII
会话层 RPC
传输层 TCP UDP
网络层 IP
数据链路层 以太网
物理层 光纤

udp 不建立连接，不保证可靠
tcp 需要建立连接，保证顺序

3次握手
验证双方接受能力和发送能力，保证历史连接不浪费
4次挥手
保证服务端没有滞留的数据没发完

cookie
1. HttpOnly 不能被 js document.cookie 拿到
2. Secure 只允许 https
3. SameSite

http 1.1 
keep-alive 长连接
管道化，客户端根据类型发多个

http 2.0
二进制传输
多路复用，一个 tcp 多个请求，乱序发送，再组装
头部压缩 map 表
服务端推送

http 3.0
谷歌基于 udp 的 quic 协议
减少握手时间，基于 tls 1.3
解决 2.0 一个 stream 丢包到后后 stream 堵塞
更好的移动端表现

预检请求（options）

withCredentials 为true不会产生预请求
withCredentials 可以发送 cookie
withCredential 请求设置了后，只有服务也设置，response 才能被 js 拿到