---
title: halting problem
date: 2019/07/25 19:18:40
tag: 油彩
---

今天摸鱼的时候突然看到了发布订阅，于是想着来写一个。不料突然在怎么取消订阅的一步卡壳了，于是我就神奇的搜了一下判断函数相等的问题。

然后，发现了新大陆！

```js
fa === fb
isEqual(fa , fb)`
```

定义一个函数 f ，对于**任何**一个函数和输入，能返回执行结果到底是对还是错

```js
function f(a,b) {
  retrun a(b)
}

f(a,b) === true or
f(a,b) === false
```

定义一个捣蛋函数 C

```js
function C(m)=>{
  if(!f(m,m)) return true
  retrun false
}

f(C,C) = true
=> C(C)= true

C(C) = true
=> f(C,C) = false

f(C,C) = false && f(C,C) = true
throw error
```

最后的结论自相矛盾，所以不存在一个能判断函数是否相等的函数。扩展开来，编程不是万能的。

函数是否相等其实可变为相似的**[停机问题](https://zh.wikipedia.org/wiki/%E5%81%9C%E6%9C%BA%E9%97%AE%E9%A2%98)**

结尾补一个简单的发布订阅

```js
function typeCheck(type) {
  if (!typeof type === 'string' && type !== '') {
    console.error('type must be non-empty string')
    return
  }
}

class Notify {
  constructor() {
    this.event = {}
  }

  emit(type, data) {
    typeCheck(type)

    const _event = this.event
    _event[type].map(fn => fn(data))
  }

  on(type, callback) {
    typeCheck(type)

    const _event = this.event
    if (!Array.isArray(_event[type])) _event[type] = [callback]
    else _event[type].push(callback)
  }

  off(type, callback) {
    typeCheck(type)
    const _event = this.event
    if (!Array.isArray(_event[type])) return
    const index = _event[type].findIndex(fn => fn !== callback)
    _event[type].splice(index, 1)
  }

  once(type, callback) {
    this.on(type, data => {
      callback(data)
      this.off(type, callback)
    })
  }
}

const notify = new Notify()
function handle(msg) {
  console.log('msg', msg)
}

notify.once('msg', handle)

notify.emit('msg', 'hi~')

notify.emit('msg', 'hi123~')
```
