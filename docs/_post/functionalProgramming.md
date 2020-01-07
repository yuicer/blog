---
title: functional programming
date: 2019/07/26 19:18:40
tag: 油彩
---

之前陆陆续续有接触过不少函数式编程的概念，平时工作中也有用到。写个自己的感受总结贴

## 函数编程 vs 面向对象编程
>everything is lambda vs enerything is object

oop 基本操作
```js
// need msg center
const shooter = new Object()
const enemy = new Object()
shooter.fire()
enemy.die()
```

fp 基本操作
```js
data.filter().map().reduce()
add(a)(b)
```

这两种编程模式不分场景比较的话就是耍流氓

个人感觉：对象编程更适合于游戏。函数编程更适合于业务

## 函数式编程
本质是给定输入，输出相同的结果。

所以就有两个本质
- stateless 无内部状态
- immutable 不改变原数据

函数的话有一个很重要的点是传入参数。由于 js 性质。参数必须按顺序一一对应，这一点就很限制一个函数的使用方式，然鹅用户的输入是不可预测的，所以有很多 hack 操作

```
// 一个大对象解析参数
fn({a,b,c,d}) 

// 内部转化
fn(config,callback){
  if (typeof config === 'function') {
    callback = config;
    config = {};
  }
}

// 合理的默认值
fn(a=1,b=2,c=3,d=4)

// 取没有声明的额外参数
fn(...args){
  const allData = args || [].slice.call(arguments) || Array.from(arguments)
}
```

由于这个原因，有一种限制函数只输入一个参数的模式就上线了

## currying 柯里化

对于本来就只输入一个的当然没问题，但是对需要多个参数的函数呢，这个时候就需要做一些转化工作

```js
function currying(fn, ...args) {
  if (args.length >= fn.length) {
    return fn(...args.slice(0, args.length))
  }
  return function(...args2) {
    return currying(fn, ...args, ...args2)
  }
}

function add(a, b, c) {
  return a + b + c
}

const curryingAdd = currying(add)
var result = curryingAdd(1)(2)(3, 4)
```

ps: 写这玩意的时候突然想到一个问题，没法校验用户输入。以上面的例子为例 
`curryingAdd(1)``curryingAdd(1)(2)(3)(4)``curryingAdd(1,2,3)(4)` 都会得不到正确的值，而且给不出任何提示。。。嘛，毕竟 fn 是用户传过来的，所以这个地方还是需要用户自己得注意吧。。。

## 惰性求值

> [wiki](https://zh.wikipedia.org/wiki/%E6%83%B0%E6%80%A7%E6%B1%82%E5%80%BC) 延迟求值特别用于函数式编程语言中。在使用延迟求值的时候，表达式不在它被绑定到变量之后就立即求值，而是在该值被取用的时候求值，也就是说，语句如x:=expression; (把一个表达式的结果赋值给一个变量)明显的调用这个表达式被计算并把结果放置到x中，但是先不管实际在x中的是什么，直到通过后面的表达式中到x的引用而有了对它的值的需求的时候，而后面表达式自身的求值也可以被延迟，最终为了生成让外界看到的某个符号而计算这个快速增长的依赖树。

不过。。感觉现在的语言基本都是惰性求值了。不然根本没法完成递归运算

## 链式计算 pipeline
前面一个的返回值是后面一个的输入

`data.filter.map.reduce` ，通过每次返回 this，来实现这种优雅的链式调用，不需要 for 循环，语义化就变得很容易。代码更容易读

## 可简单移植

由于没有中间状态，函数可以很方便被拷贝复用