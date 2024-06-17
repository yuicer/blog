react 18(https://react.dev/blog/2022/03/29/react-v18)

Concurrency (fiber node schedule)
New hooks Transitions
Automatic Batching
Suspense component
Server component

找 1w 树前 10 大的树
new 一个 array 10 并排序，用剩下的每次和最小的比（依次上）

事件，冒泡，捕获，委托

event 冒泡 stopPropagation zindex 高层级节点向 parent node 冒泡。
preventDefault()
addEventListener(type,fn,options) capture（事件捕获） noce passive(申明调用 preventDefault)
onclick

[node event loop](https://blog.fundebug.com/2019/01/15/diffrences-of-browser-and-node-in-event-loop/)

timers 阶段：这个阶段执行 timer（setTimeout、setInterval）的回调
I/O callbacks 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调
idle, prepare 阶段：仅 node 内部使用
poll 阶段：获取新的 I/O 事件, 适当的条件下 node 将阻塞在这里（wait for incoming request）
check 阶段：执行 setImmediate() 的回调
close callbacks 阶段：执行 socket 的 close 事件回调

外部输入数据–>轮询阶段(poll)–>检查阶段(check)–>关闭事件回调阶段(close callback)–>定时器检测阶段(timer)–>I/O 事件回调阶段(I/O callbacks)–>闲置阶段(idle, prepare)–>轮询阶段（按照该顺序反复运行

箭头函数，普通函数
没有 arguments prototype
this 不同，不能用 bind call apply
写法

undo redo

1. command 的逆命令
2. 每次状态都有快照

懒加载
IntersectionObserver
img.lazy
getBoundingClientRect

flex:1
flex-grow<default: 0>: 放大比例，有剩余空间，是否/如何放大
flex-shrink<default 1>: 缩小比例，空间不够，是否/如何缩小
flex-basis<default: 0%>: 盒子基准值

sessionStorage: 生命周期等同于当前 tab，在当前 tab 刷新后仍旧存在，但另开一个没有

引起重排的属性: 主要看影响布局的
引起重绘的属性: 主要看影响外观的
temp1.setAttribute('style',`color: red; font-size: 22px`)
temp1.style = `color: red; font-size: 22px`
DocumentFragment

promise.any 任意一个成功或者都失败
promise.race 任意一个成功或者失败

defer 在 domcontentloaded 之后，但是不阻碍 dom 渲染，彼此之间有序
async 完全异步
在实际开发中，defer 用于需要整个 DOM 的脚本，和/或脚本的相对执行顺序很重要的时候。
async 用于独立脚本，例如计数器或广告，这些脚本的相对执行顺序无关紧要。

DoS（拒绝服务攻击，Denial of Service）是一种网络攻击手段，它通过给服务器发送大量请求来阻止对资源的合法使用。

跨站脚本攻击（Cross-site scripting，XSS）是一种安全漏洞，攻击者可以利用这种漏洞在网站上注入恶意的客户端代码。若受害者运行这些恶意代码，攻击者就可以突破网站的访问限制并冒充受害者

CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求

中间人攻击（Man-in-the-middle attack，MitM）会在消息发出方和接收方之间拦截双方通讯

git merge --squash Abranch

object.is()
== 做隐式转换
=== 对数字处理上不同，NaN, +0 -0

http 缓存
expire
cache-control
304 协商缓存
