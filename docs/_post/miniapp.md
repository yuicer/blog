---
title: miniapp
date: 2023/04/19 17:53:01
tag: 砖头
---

## 小程序语法

(ttml + js + ttss)

小程序作为一个有特殊业务属性的产物，对安全稳定体验有比较高的要求，所以它的方向是 webview + hybrid。具有 web 灵活开发，同时也能使用很多 app 提供的能力

因为安全的原由，小程序的开发和传统的 web 区别较大。最集中体现在对环境的操作，如 dom eval 这类。

小程序有一套 vue-like 的语法。如此选择一是因为它需要用模版来做一些控制隔离，而是做一些编译上的处理和优化。所以它摈弃了 react jsx 这种非常灵活的函数写法。而是结合 vue 和 svelte 的优点来做架构，他的 diff 也是结合这两个来做，不完全用 svelte 是因为想保持小体积。

## 小程序架构

双线程。做到 js （v8,qjs,jsc）逻辑和实际 ui 渲染的分离，本质在于这是一个 app 上的 webview
基于 app， 多 webview，web 标准

## 小程序 js 选型

这一块有很多选择

JavasScriptCore 是 ios 阵营，safari，wkwebview 自带。但是对安卓适配和性能差一些

V8 安卓阵营，性能很强，但是内存体积占用很高

Hermes facebook 为 react native 打造，体积小，内存小，适合重 ui 场景， hybrid 模式。（生成字节码。和端，多语言配合好）

QuickJs 内存体积很小，性能还可以。嵌入式开发友好

一般来说，ios 都会选择 jsc，安卓使用 qjs 的比较多

## jsBridge
它更像是一个概念，有非常多种的实现。

比如可以直接粗暴的给 webview context 全局环境注入方法，使 js 可以直接用

也可以通过 uri scheme

这一块本质上来说，是构造了一个中间层 jssdk，将 app 的方法注入

## canvas v2 v1

https://developers.weixin.qq.com/miniprogram/dev/framework/ability/canvas-legacy-migration.html

canvas v2 v1 的本质区别应该在于 canvas 这个组件从 webview 实现变成了端实现（同层渲染）

所以通信从 jscore => webview 变成了 jscore => end api

同时 js 通信从双线程变成了直接可以调端上同步方法，一些 canvas api 也转成了同步方法，也不再需要 draw 方法

### 同层渲染
解决一些高级功能不好用不可用，同步位置信息耗时，css 支持不好，zindex 不起作用，这类控件难受 webview 控制

最开始都是 cover 覆盖的方式叠层 webview，下面的 webview 对应的部分做透明，然后同步位置信息

ios =》WKWebview 启用 UIScrollVIew
1. background-color
2. className

android 挖洞/三明治，本质多层
1 找一块内容变透明下面放 background-webview native-view display-webview

真正同层
1. embed html
```
1. <embed style="width: 300px; height:200px;" type="plugon/text_box"> </embed>
2. plugin receive => webview extension surfacetexture 绘制上屏
```

## 小程序测试

采用 shoots 服务
https://github.com/Tencent/QTAF
https://appium.io/docs/en/2.0/
https://github.com/AirtestProject/Airtest

Accessibility



## 其他参考

### react

react 由于灵活的特性无法做预编译去进行标记，所以其 vdom 更新 只能从 root 开始重新生成,在大应用程序的场景下会非常卡。于是进行了时间分片的优化，设计了新的 fiber 和 schedule 来帮助做这件事情。实现了自己的 `requestIdleCallback`，同时也做了批量跟新来减少 update，其策略主要在运行时
```
render(){
  return  <h1 class="greeting">hello</h1>
  return  react.createElement(
    'h1',
    { className: 'greeting' },
    'Hello'
  );  
}
```

react is transformed from reactive to schedule
1. 批量更新
2. 并发
3. 任务优先级(fetch data vs click)

### vue
vue 由于其有模版 html，所以比较易做预编译处理优化。

1.打平树结构
2. 提取静态标签
3. 区分不同功能 `v-if v-for {{data}}`的标签进行不同处理

### svelte
svelte 则是不适用运行时，在编译时进行绑定




## 附录
https://cloud.tencent.com/developer/article/1801742
https://github.com/berwin/Blog/issues/49

