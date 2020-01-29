---
title: Linear algebra
date: 2020/01/03 17:31:53
mid: 431259256
---

## [线性代数具体学习](https://www.bilibili.com/video/av15463995) 

### 1
1. 方程组的图形化，二维平面两条线相交一点，三维平面两条线形成一个面，三条线相交与一点
2. 方程组的向量化，不考虑几何意义，把 xyz 系数变成向量，考虑怎么组合三组向量，得到一个目标向量，解变成组合的方式系数【矩阵列的线性组合】

### 2
1. 方程组消元法
2. 矩阵消元
3. 矩阵结合率
4. 单位矩阵 I 置换矩阵 P 矩阵 E 逆矩阵 E-1

核心在于矩阵的意义，左乘为行操作，右乘为列操作。




----- 

> 在涉及到稍微深一点的图形计算时发现自己数学的东西全忘了。。。补充一点基本知识

### 向量相加（结果为向量）

$$\vec a + \vec b = (\vec ixa + \vec ixb,  \vec iya + \vec iyb)$$

几何意义为 平行四边形法则
$$(AB)^2+(BC)^2+(CD)^2+(DA)^2=(AC)^2+(BD)^2$$

对于一般的四边形，平行四边形恒等式不再成立，但可以得到的是一个相似的不等式：

$$(AB)^2+(BC)^2+(CD)^2+(DA)^2 \ge (AC)^2+(BD)^2$$

一个边为蓝色而对角线为红色的平行四边形，两条红线长度的平方之和等于四条蓝线的长度的平方之和。
![](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Color_parallelogram.svg/2560px-Color_parallelogram.svg.png)

物理意义： 几个力的合力

### 向量内积（结果为单位长度）

$$\vec a \cdot \vec b = \lvert a \rvert \lvert b \rvert \cos \theta$$

$$\vec a \cdot \vec b = a_xb_x + a_yb_y$$

表示一个向量在另一个向量上的投影的积，也就是同方向的积

物理意义： 一个斜坡上用力 F 斜上拉一个物体，位移为 S（没有重力的情况下），那么这个力 F 所作的功

### [线性变化](https://zh.wikipedia.org/wiki/%E7%9F%A9%E9%98%B5#%E7%9F%A9%E9%98%B5%E4%B9%98%E6%B3%95)

> 实际为坐标系的变化，再将变换后的位置用原标准坐标系方式显示出来.

将标准坐标系【单位 i j】

$$ \begin{bmatrix}1 \\ 0\end{bmatrix} \begin{bmatrix}0 \\ 1\end{bmatrix} \qquad (x,y) \Rightarrow \begin{bmatrix}1 \\ 0 \end{bmatrix} \cdot x + \begin{bmatrix}0 \\ 1\end{bmatrix}\cdot y $$

变换

$$\begin{bmatrix}a \\ b\end{bmatrix} \begin{bmatrix}c \\ d\end{bmatrix} \qquad \begin{bmatrix}a \\ b \end{bmatrix} \cdot x + \begin{bmatrix}c \\ d\end{bmatrix} \cdot y \Rightarrow \begin{bmatrix}a & c \\ b & d\end{bmatrix} \begin{bmatrix}x \\ y\end{bmatrix}  \Rightarrow \begin{bmatrix}ax & cy \\ bx & dy \end{bmatrix}  \Rightarrow  (ax+cy,bx+dy)$$

所以可以将一个线性变换看作是一个矩阵变换
