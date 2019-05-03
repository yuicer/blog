---
category: 碎碎念
title: stylus config
img: '/img/cat.jpg'
---

### 前言

最近在 vue 中写 stylus 时格式话不太正确。需要配置一下设置
因为 vetur 中默认的 stylus 的默认 Formatter 是 stylus-supremacy 所以配置它就行了

<!-- more -->

```json
  "stylusSupremacy.insertColons": false, // 是否插入冒号（默认是true）
  "stylusSupremacy.insertSemicolons": false, // 是否插入分号
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false // 两个选择器中是否换行
```
