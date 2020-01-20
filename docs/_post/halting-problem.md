---
title: Halting problem
date: 2019/07/25 19:18:40
tag: 油彩
---

## intro

今天摸鱼的时候突然看到了发布订阅，于是想着来写一个。不料突然在怎么取消订阅的一步卡壳了【想成写一个逻辑去判断是否两个函数相等，相等就取消，这里傻了，直接判断是否是自己就可以，因为这里是引用】，于是我就神奇的搜了一下判断函数相等的问题。

然后，发现了新大陆！

函数是否相等其实可变为相似的**[停机问题](https://zh.wikipedia.org/wiki/%E5%81%9C%E6%9C%BA%E9%97%AE%E9%A2%98)**

那么我们能不能有这样一个函数等于已知函数 FOO 呢？

换句话说，我们能不能写一个方法，返回一个函数等于 FOO 呢

定义一个函数 F ，对于**任何**函数，可以判断它返回值是否等于一个已知函数 FOO


```ts
function F(func):boolean {
  return func === FOO
}
```

定义一个捣蛋函数 C

```ts
function C(m)=>{
  if(f(m) === true) return null
  if(f(m) === false) return FOO
}
// 从 F 函数定义出发
F(C) = true => C(X:any) === FOO


// 从 C 函数出发
C(C) => f(C) === true  C(C) === null
C(C) => f(C) === false  C(C) === FOO
```
所以看到，这里无论 f(C) 等于什么，最后都会和其本身的定义相矛盾

所以不存在一个能判断函数是否相等的函数。扩展开来，编程不是万能的。

其实里面的问题就在于定义是一个全局的，不分先后的。但是如果利用它自己的结果来再次定义返回就会被钻篓子。



### 最后补一个简单的发布订阅


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
