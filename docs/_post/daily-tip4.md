---
title: Daily tip 04
date: 2023/01/09 17:53:01
tag: 砖头
img: /img/20230109-1.jpg
---


## find port
```
netstat -anp | grep 3009
kill -9 2347946
```

## github auth failed
```
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the RSA key sent by the remote host is
SHA256:uNiVztksCsDhcc0u9e8BujQXVUpKZIDTMczCvj3tD2s.
Please contact your system administrator.
Add correct host key in ~/.ssh/known_hosts to get rid of this message.
Host key for github.com has changed and you have requested strict checking.
Host key verification failed.
```

just run 
```
ssh-keygen -R github.com
```

## performance.now()

Unlike Date.now, the timestamps returned by performance.now() are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.

Also, Date.now() may have been impacted by system and user clock adjustments, clock skew, etc. as it is relative to the Unix epoch (1970-01-01T00:00:00Z) and dependent on the system clock. The performance.now() method on the other hand is relative to the timeOrigin property which is a monotonic clock: its current time never decreases and isn't subject to adjustments.

`currentTime = performance.timeOrigin + performance.now();`


## fetch png/jpg
so how to get the imageData in Node like browser

node
```
import { PNG } from 'pngjs';
const data = await fetch(imgUrl, {
   method: 'get',
   headers: {
   'responseType': 'arraybuffer'
   }
});
const arrayBuffer = await data.arrayBuffer();
const imgData = PNG.sync.read(Buffer.from(arrayBuffer1));
console.log('imgData:', imgData);
```

browser
```
const domImg = document.getElement('#img')
const canvas = document.getElement('#canvas')
const ctx = canvas.getContext('2d')
ctx.drawImage(domImg,0,0,width?,height?)
const imgData = ctx.getImageData(0,0,500,500)
console.log('imgData:', imgData)
ctx.clearRect(0,0,500,500)
ctx.putImageData(imgData,40,40)
```

```
data: Uint8ClampedArray(1000000) [216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, …]
colorSpace: "srgb",
height: 500,
width: 500,
```

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