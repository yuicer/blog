---
  title: svg-path
  date: 2020/10/30 11:06:07
  tag: 砖头
---
  
### 前言
又遇到之前解决过的问题，但又花了一些时间再次解决。这里收集记录一些相关问题

#### 挖空效果

首先这里看一组对比的例子

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L100, 0 L100,100 L0,100Z "></path>
</svg>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L100, 0 L100,100 L0,100Z  M20,80  L80, 80 L80,20 L20,20 Z"></path>
</svg>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L100, 0 L100,100 L0,100Z  M20,80  L20,20 L80,20  L80,80 Z"></path>
</svg>

<br/>
<br/>
<br/>
<br/>
<br/>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L0, 100 L100,100 L100,0Z "></path>
</svg>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L0, 100 L100,100 L100,0Z  M20,80  L80, 80 L80,20 L20,20 Z"></path>
</svg>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L0, 100 L100,100 L100,0Z  M20,80  L20,20 L80,20  L80,80 Z"></path>
</svg>


```html
<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L100, 0 L100,100 L0,100Z "></path>
</svg>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L100, 0 L100,100 L0,100Z  M20,80  L80, 80 L80,20 L20,20 Z"></path>
</svg>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L100, 0 L100,100 L0,100Z  M20,80  L20,20 L80,20  L80,80 Z"></path>
</svg>

<br/>
<br/>
<br/>
<br/>
<br/>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L0, 100 L100,100 L100,0Z "></path>
</svg>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L0, 100 L100,100 L100,0Z  M20,80  L80, 80 L80,20 L20,20 Z"></path>
</svg>

<svg viebox="0,0,100,100" width="150" height="100">
  <path fill="#939597" strokeWidth="2" stroke="#652c90"  d="M0,0 L0, 100 L100,100 L100,0Z  M20,80  L20,20 L80,20  L80,80 Z"></path>
</svg>
```

在这两组，每组三个的盒子里面，分别为方块的组合，但是效果却不一样。

结论：在 svg 里面，同一个 path 节点中，如果有多段的路径。那么根据路径的顺/逆时针，会决定多组路径图形之间的叠加方式是叠加还是裁剪。当两组图形的画法不是一个方向进行时，两组图形就会变成挖空的这种效果

#### 兼容问题
虽然 svg 的path 可以不写逗号，纯用空格来进行判断，但是这样的写法兼容并不是特别好，一般推荐还是加上逗号来进行区分。否则在某些 js 库【非浏览器 dom 的支持下】解析花出来的图形可能会比较奇怪