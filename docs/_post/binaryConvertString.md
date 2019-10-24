---
title: binaryConvertString
date: 2019-10-24 14:28:40
tag: 砖头
---

### 前言
今天刚好过节，看到有人发 01 庆祝，感觉挺好玩的。


110010111101001 111000010111001 100111000001011 111001111101101 1111111100001100 101011011011110 101101110110110 101010000000011 1001100101101101 1111111100001100 101010000000011 101101110001100 110010101100011 110101101100101 1111111100001100 1010011 1010100 1000101 1000001 1001101 100000 1001111 1001110 100001

```js

const str = `早点下班，回家吃饭，吃完散步，STEAM ON!`

function wordToBinary(str = '') {
  return str
    .split('')
    .map(x => x.charCodeAt().toString(2))
    .join(' ')
}

function binaryToWord(str = '') {
  return str
    .split(' ')
    .map(x => String.fromCharCode(parseInt(x, 2)))
    .join('')
}

var foo = wordToBinary(str)
var bar = binaryToWord(foo)

console.log(foo)

```