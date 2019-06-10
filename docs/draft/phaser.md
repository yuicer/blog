---
title: phaser 笔记
category: 尺工
date: 2019-05-20 16:02:27
---

记录一下看 phaser 3 的一些笔记

1. 可以链式调用
2. 其中有个 scene 的概念
3. 对象开启 setInteractive 之后就可以开始监听事件
```js
var sprite = this.add.sprite(x, y, texture);
sprite.setInteractive();
sprite.on('click', handle, context);
```