---
title: Daily tip 04
date: 2023/01/09 17:53:01
tag: 砖头
img: /img/20230109-1.jpg
---

## absorb page color
1. html to canvas
   1. get all dom in view, and use dsl (basic dom-css to canvas api) to transfer to canvas, and toImageData to get color
2. window.[eyedropper](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper)
3. get specific dom computed style


## cario vs skia
Cairo c语言实现，优点包括可移植性，支持多种设备平台；它可以创建栅格和向量图像，具有良好的可扩展性，以及可扩展的输出格式。与Skia相比，Cairo对文本和图形渲染的支持也更为丰富。
Cairo的主要缺点是其性能不如Skia，这使得它适合绘制较复杂的图形而不是动画或游戏。另外，Cairo的API功能也不如Skia那样广泛，并且不能很好地支持Android开发。

skia c++
## node-canvas install problems

https://github.com/Automattic/node-canvas/wiki/Installation:-Windows