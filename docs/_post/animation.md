---
title: Animation
date: 2019/05/06 19:18:40
tag: 砖头
img: /img/css-animation.png
---

## 1. gif 动画

这个对前端很省事情。但是它有一个严重缺陷是 gif 图会有白边，而且没有透明度

## 2. css 动画

1. 图片帧动画

核心在于 `background-position` `animation: ... steps(1)` 通过快速切位置达到动画的效果

<img src="https://s3.music.126.net/nact/s/client/images/year2017/p05/man_repeat.png?d8aa052%E2%80%A6" width="100%">

<iframe src="/demo/demo_180102/index_man.html" frameborder="no" marginwidth="0" marginheight="0" width="100" height="150"></iframe>

ps： 一些小视频也可以通过这种方式制作

## 3. svg 动画

1. 路径动画【樱花】

  <iframe src="/demo/demo_180102/index_sakura.html" frameborder="no" marginwidth="0" marginheight="0" height="300" scrolling="no"></iframe>

这个动画其实是 3 张樱花图片在做变换，下面是其中一张图片的变换代码

animateMotion 中的 path 属性可以定义 svg 节点沿着某一路线进行移动

```html
<animateTransform
  attributeName="transform"
  attributeType="XML"
  type="rotate"
  from="0 0 0"
  to="360 90 90"
  dur="8s"
  repeatCount="indefinite"
></animateTransform>
<animateMotion begin="-1s" dur="4s" rotate="auto" repeatCount="indefinite">
  <mpath xlink:href="#a"></mpath>
</animateMotion>
<path d="M674.09-33.84C342.94 353.33 88.03 549.27-90.66 553.98" id="a"></path>
```

1. 线段动画

<svg id="ani" width="100px" height="100px" viewBox="0 0 100 100">
  <g stroke-width="4" stroke="#C7C7CB" fill="none">
    <rect x="0" y="0" width="100" height="100" ></rect>
  </g>
</svg>

<style>
#ani {
  animation: stroke 4s both infinite;
  stroke-dasharray: 0 400;
}

@keyframes stroke {
  100% {
  stroke-dasharray: 400 400;
  }
}
</style>

主要点是 `stroke-dasharray` dasharray 将线段分为实线和虚线，通过合理设置实线虚线长可以实现动画

虚线根据需要设的大一点，这样使需要的线段图形部分全部为实线，通过动画实现线段的加载。

不过由于线段的设置原因，实际的动画时间可能不会是设置的动画时间，需要根据情况调整

一般的 loading 转圈图都是这个原理

```html
<svg id="ani" width="100px" height="100px" viewBox="0 0 100 100">
  <g stroke-width="4" stroke="#C7C7CB" fill="none">
    <rect x="0" y="0" width="100" height="100"></rect>
  </g>
</svg>

<style>
  #ani {
    animation: stroke 4s both infinite;
    stroke-dasharray: 0 400;
  }

  @keyframes stroke {
    100% {
      stroke-dasharray: 400 400;
    }
  }
</style>
```

3. [lottie-web](http://airbnb.io/lottie/#/)

这个是 airbnb 出的一个一站式解决方案。原理还是 svg 路径动画，不过它结合了 ae，而且支持全平台【web 端，app 端，还有 airbnb 自己的 RN】，ae 上做完之后直接装这个插件，然后导出给各端就好了。

前端的 [api](http://airbnb.io/lottie/#/web?id=usage-1) 还是很多的。

4. matrix(a,b,c,d,e,f)【css，svg 中的 transform】

<img src="/img/matrix.png" />

这个是万能的矩阵变换。。。。所有的其他 transform 属性都是通过它来实现

这里有个比较形象的[例子](https://www.zhangxinxu.com/study/201206/css3-transform-matrix-30-30-step.html)

那么怎么写出一个复杂的效果呢？

1. 通过组合基本的变形，选择等一系列操作之后进行矩阵的乘法
2. 预定几个最终点，然后写个方程组开始解方程。。。

## 4. canvas【webgl】 动画

canvas 的动画实际上就是进行 js 计算点的坐标，然后进行重新绘制。所以主要工作其实都在数据计算上，其他都是素材的问题.下面主要做一些展示介绍

### 1. 图片帧动画

利用 requestFrameAniamtion 来实现动画

通过在每一帧替换内容，一般通过【ctx.clearReact(0,0,canvas.width,canvas.height) 或者 ctx.draw 一张新全背景图覆盖掉】清除上一帧内容，再绘制当前内容来实现

  <iframe src="https://yuicer.com/slime/" frameborder="no"  height="700" width="800" scrolling="no"></iframe>
   
### 2. 3d
  
#### 2.1 vr

  <iframe src="/vr/" frameborder="no"  height="300" scrolling="no"></iframe>

这个之前记得有一段时间微博上出了这个功能，挺火的。本质就是一张 360 度的图。这个好玩是因为能结合手机的陀螺仪，晃手机就能动。

这个目前 web 有一个很好用的库，Aframe， Aframe 是基于 three.js 进行封装的 3d 库，基本思想是游戏开发使用的 esc 模式。

它对 3d vr 的包装都挺方便的。比如下面这个全面图效果，而且在手机上的话还可以直接利用收集的陀螺仪，非常方便。

简单说一下 esc 模式就是【Entity，Component，System， 它的模式一个核心点就是 _组件无函数，系统无状态，充分解耦_ ，通过这种组合模式的思想进行开发，会使开发多对象物体非常很方便

#### 2.2 其他 3d 动画

**_[demo1](https://yuicer.com/maze/) [demo2](https://yuicer.com/snake/)_**

### 3. 数据配置动画

这种都是通过生成一系列的配置，然后去操作对应的图片进行变换【移动，缩放，变形】来实现动画效果，但是这种东西一般都是绑定自己一整套的工具，从解析参数文件的 sdk 到生存参数文件的应用

#### 3.1 live2d

这个技术在出来其实有一段时间了，一直火不起来是因为有很多缺陷。。。
上手做这个东西得门槛比较高。。。因为模型素材很难搞。
它的模型是通过 3d 模型转 2d 之后生成的贴图。所以就很麻烦。。。而且它绑定的一套工具都是自家软件【日文的】。所以个人开发者比较少

 <iframe src="/live2d/sample/sampleApp1/" frameborder="no" marginwidth="0" marginheight="0" height="300" scrolling="no"></iframe>

#### 3.2 骨骼动画

这个和 live 2d 原理有些类似。也是通过设置数据，比放说用 egret 的这个 dragonBones 举个<a href="/dragonbones/" target="_blank">例子</a>

---

## 结语

我自己对动画的看法和定位是，动画是用来延伸产品使用时间的一种主要方法。现在对动画的用法大概就两种

1. 用动画做掩盖。【页面 loading，游戏中的打击动画】
2. 用动画提升交互。【dom css 动画，数据可视化】
