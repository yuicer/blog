---
title: daily tip 02
date: 2019-12-09 16:28:40
tag: 砖头
img: /img/richang02.png
---

### webpack compile ts project to node & browser

1. excepting setting `output.libraryTarget: 'umd',`, you need also set `output.globalObject: this` [globalObject](https://webpack.js.org/configuration/output/#outputglobalobject) wtf?

2. to avoid annoying `default`

```js
import xxx from 'xxx'
const xxx = require('xxx').default
```

you need to add `libraryExport: 'default'` to support

```js
import xxx from 'xxx'
const xxx = require('xxx')
```

> attach file

<table>
<thead>
<tr>
<th>pattern</th>
<th>export commonJS</th>
<th>consume from common js</th>
<th>export from ESM</th>
<th>consume from ESM</th>
</tr>
</thead>
<tbody>
<tr>
<td>1: normal export</td>
<td><code>module.exports.cool =</code></td>
<td><code>const { cool } = require("x")</code></td>
<td><code>export const cool = </code></td>
<td><code>import { cool } from "x"</code></td>
</tr>
<tr>
<td>2: default export</td>
<td><code>module.exports.default = </code> (not a special case!)</td>
<td><code>const { default } = require("x")</code></td>
<td><code>export default ...</code></td>
<td><code>import cool from "x"</code> (any other name works as well)*</td>
</tr>
<tr>
<td>3: replace entire module export</td>
<td><code>module.exports = something cool</code></td>
<td><code>const cool = require("x")</code></td>
<td>Not possible! People <em>try</em> to achieve this with <code>default</code>, but it's an entirely different beast</td>
<td><code>import * as cool from "X"</code></td>
</tr>
</tbody>
</table>
