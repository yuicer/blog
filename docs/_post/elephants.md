---
  title: elephants
  date: 2021/05/16 15:55:17
  img: /img/20210516-3.png
  mid: 4909229
---
  
## 碎语
> 人间如隙时光如驹

不管怎么说，这是久违的又一次更新。

<iframe src="/demo/demo_210516/index.html" frameborder="no" marginwidth="0" marginheight="0" width="100%" height="250"></iframe>

## 前言
这是一个从准备写到实际开始写拖了一年多的文章。起源是最开始去食堂吃饭，要从地下车库走，然后地下车库的墙上就画着一副大象图。第一次看到的时候就想起了不知道从哪里听到的一句谚语。用四个参数就可以画出一个大象。回去查了一下还真的有一篇论文是关于这个的，下面简单意译了一下论文内容

[Drawing an elephant with four complex parameters](https://fermatslibrary.com/s/drawing-an-elephant-with-four-complex-parameters)

弗里曼·戴森（Freeman Dyson）人生的转折点发生在1953年春季的一次颁奖典礼上，当时恩里科·费米（Enrico Fermi）引用约翰尼·冯·诺依曼（Johnny vonNeumann）的话，批评了戴森模型的复杂性：“我可以用四个参数拟合大象，甚至可以用五个参数使他摆动鼻子。” 从那以后，它成为了物理学家的一句著名的谚语。但是还没有任何人去成功的证明这句话。

为了去参数化一头大象，我们注意到可以把大象轮廓转化成一系列 x(t), y(t) 的点集。随着时间的变化，x,y 点沿着大象轮廓进行变化。如果速度均匀，则 t 可以看作是周长。下面我们把 x(t), y(t) 展开为傅立叶级数的形式

<img src="/img/20210516-1.png" style="max-width: 400px;">

这里 A B 参数为展开的系数，较低的指标 k 代表为当前是傅立叶的第几展开，较高的参数则代表当前是 x 的展开还是 y 的展开

使用这种展开为 xy 坐标系的方式，我们可以通过构造轮廓来分析图像，并且计算出展开式的系数（使用傅立叶分析的标准方法）。通过不断的代入小间距 t，生成的点可以平滑图像，这种方式和用像素点保存图像的方式比，可以大大减少表达一副图像的所需信息。举个例子， Székely et al 用这种方法分割磁共振成像数据。 使用相似的方法分析红细胞的形状，并使用球谐函数展开作为傅立叶坐标展开的3D化

在下面这种情况下，这些傅立叶系数表达了对给定形状的一个最完美的拟合。k=0 时对应于形状的质心。k=1 时对应于最好的椭圆拟合。随着 k 的提高，可以不断的修改最终图像的美观性，达到完全拟合。通过把这些系数结合到复数中，我们可以得到4组复数参数，来等效拟合大象图像。第五个参数的实数参数代表为一个摇晃参数，它用来代表鼻子连接到身体的 y 【论文这里是 x ，但是实际使用下来应该对应的是 y】值，其虚数部分代表大象眼睛。所有的参数都在表中有表示出来。

<img src="/img/20210516-2.png">

最后产生的图像比较简单卡通，但是仍然可以看出来它是一个大象，尽管使用傅立叶来构建图像不是一个新使用，但是我们也清楚地证明了其在减少描述二维轮廓所需的参数数量方面的有用性。在参考资料5中，我们可以找到它的可视化工具

现在我们使用这个工具，用我们得到的四个参数开始来拟合大象。图b

<img src="/img/20210516-3.png" style="max-width: 400px;">

在 1975 年，同样有人用了 30 个系数来描述出了下图a

<img src="/img/20210516-4.png" style="max-width: 400px;">

通过消除幅度小于最大幅度的10％的分量，我们获得了一个近似频谱。通过不断消减构造，可以把它最终表达为4个复数系数，同时也证明了谚语的正确性。【我可以用四个参数拟合大象，甚至可以用五个参数使他摆动鼻子。】

## 原理
[傅立叶级数](https://zh.wikipedia.org/wiki/%E5%82%85%E9%87%8C%E5%8F%B6%E7%BA%A7%E6%95%B0)

<img src="/img/20210516-5.png">

在数学中，傅里叶级数是把类似波的函数表示成简单正弦波的方式。更正式地说，对于满足狄利克雷定理的周期函数，其傅里叶级数是由一组简单振荡函数（正弦与余弦函数，或等价的复指数函数）的加权和表示的方法。离散时间傅里叶变换是一个周期函数，通常用定义傅里叶级数的项进行定义。另一个应用的例子是Z变换，将傅里叶级数简化为特殊情形 |z|=1。傅里叶级数也是采样定理原始证明的核心。

举个🌰，方波

[方波的数学形式](https://www.desmos.com/calculator/mkecnyyktk?lang=zh-CN)
一个题外话，方波中存在一个固定的冲量，[吉布斯现象](https://zh.wikipedia.org/wiki/%E5%90%89%E5%B8%83%E6%96%AF%E7%8E%B0%E8%B1%A1)

<iframe src="/demo/demo_210516/index2.html" frameborder="no" marginwidth="0" marginheight="0" width="100%" height="550"></iframe>

## 代码验证

```js
var canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d');

var elephant = [];
var π = Math.PI;
var τ = 2 * Math.PI;
var P = 256;
var theta = 0;
var width = 600;
var height = 600;
var scale = 4;

FourierCoeffcient = function (real, image) {
  this.real = real;
  this.image = image;
};

//  p1 = 50 - 30j
//  p2 = 18 +  8j
//  p3 = 12 - 10j
//  p4 = -14 - 60j
//  p5 = 40 + 20j

// x(t): [  0. +0.j , -60.-30.j , 0. +8.j , -0.-10.j , 0. +0.j  ,   0. +0.j]
// y(t): [  0. +0.j ,   0.+50.j , 0.+18.j , 12. +0.j , 0. +0.j  , -14. +0.j]
var P0 = new FourierCoeffcient(0, 0);
var P1 = new FourierCoeffcient(50, -30);
var P2 = new FourierCoeffcient(18, 8);
var P3 = new FourierCoeffcient(12, -10);
var P4 = new FourierCoeffcient(-14, -60);
var P5 = new FourierCoeffcient(40, 20);

Point = function (x, y) {
  this.x = x;
  this.y = y;
  this.radius = 3;
};

function makeElephant() {
  var x, y;

  for (var i = 0; i < P; i++) {
    x =
      // sin
      0 * Math.sin(0 * τ * (i / P)) +
      P1.image * Math.sin(1 * τ * (i / P)) +
      P2.image * Math.sin(2 * τ * (i / P)) +
      P3.image * Math.sin(3 * τ * (i / P)) +
      0 * Math.sin(4 * τ * (i / P)) +
      0 * Math.sin(5 * τ * (i / P)) +
      // cos
      0 * Math.cos(0 * τ * (i / P)) +
      P4.image * Math.cos(1 * τ * (i / P)) +
      0 * Math.cos(2 * τ * (i / P)) +
      0 * Math.cos(3 * τ * (i / P)) +
      0 * Math.cos(4 * τ * (i / P)) +
      0 * Math.cos(5 * τ * (i / P));

    y =
      // sin
      0 * Math.sin(0 * τ * (i / P)) +
      P1.real * Math.sin(1 * τ * (i / P)) +
      P2.real * Math.sin(2 * τ * (i / P)) +
      0 * Math.sin(3 * τ * (i / P)) +
      0 * Math.sin(4 * τ * (i / P)) +
      0 * Math.sin(5 * τ * (i / P)) +
      // cos
      0 * Math.cos(0 * τ * (i / P)) +
      0 * Math.cos(1 * τ * (i / P)) +
      0 * Math.cos(2 * τ * (i / P)) +
      P3.real * Math.cos(3 * τ * (i / P)) +
      0 * Math.cos(4 * τ * (i / P)) +
      P4.real * Math.cos(5 * τ * (i / P));

    elephant.push(new Point(x, y));
  }

  // eye
  elephant.push(new Point(P5.image, -P5.image));
}

function draw() {
  ctx.translate(width / 2, height / 2);
  ctx.scale(3, 3);
  ctx.strokeStyle = 'steelblue';

  let delta = (Math.cos(τ * theta) - 0.5) / 10;

  elephant.forEach((p, index) => {
    ctx.beginPath();
    let _p = Object.assign({}, p);

    // 这里根据 delta 做一个动画
    if (_p.x > P5.real) {
      _p.y += (_p.x - P5.real) * delta;
    }

    // body
    ctx.arc(_p.x, _p.y, _p.radius, 0, τ);

    // eye
    if (index === elephant.length - 1) {
      ctx.fillStyle = 'black';
      ctx.fill();
    }

    ctx.stroke();
  });
  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

makeElephant();

function loop() {
  ctx.clearRect(0, 0, width, height);
  theta += 0.1;
  draw();
  setTimeout(() => {
    loop();
  }, 100);
}

loop();
```