---
title: Daily tip 02
date: 2019/12/09 16:28:40
tag: 砖头
img: /img/20191209.png
---

## import file from outside of src
cause of some shit reasons, I have to import files from anther project into this project. track some problems in this process

1. create-react-app
[create-react-app/issues/834](https://github.com/facebook/create-react-app/issues/834)
[hack solutions](https://stackoverflow.com/questions/44114436/the-create-react-app-imports-restriction-outside-of-src-directory)

delete ModuleScopePlugin will release this limit. but you also need to setup loaders yourself.

examples
```ts
import { resolve } from 'path'
chainWebpack(config) {
   config.module.rule('your-loader').include.add(resolve('../your-path'));
},
```

**through the right way is to use yarn/npm link and make monorepo. but making tsconfig.json is really annoying** 


## [youtube-dl](https://github.com/ytdl-org/youtube-dl)
youtube-dl is a command line tool to download videos

```shell
brew install youtube-dl
# helpful when download 1080P, it will merge audio and vidwo automatically
brew install ffmpeg
# get download list
youtube-dl -F https://www.youtube.com/watch\?v\=8PYKGIeDZLQ
# download 1080P
youtube-dl -f 137+140  https://www.youtube.com/watch\?v\=8PYKGIeDZLQ
```


## git reset --soft

this comand `git reset --soft HEAD~1` can widthdraw the commit operation

## d.ts.map

if npm package provides the d.ts.map file. then you will jump to (.ts) file rather then (.d.ts) file when click the export constant.
and this need you can not ignore ts files in .npmigonre.

## webpack compile ts project to version using in node or browser

1. excepting setting `output.libraryTarget: 'umd',`, you need also set `output.globalObject: this` [globalObject](https://webpack.js.org/configuration/output/#outputglobalobject) wtf?

2. to avoid annoying `default` below
   you need to add `libraryExport: 'default'` to solve that

```js
import xxx from 'xxx'
const xxx = require('xxx').default

import xxx from 'xxx'
const xxx = require('xxx')
```

<form>
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
</form>
