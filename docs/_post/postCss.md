---
title: postCss
categories:
  - 尺工
date: 2018-07-13 14:05:30
---
<p></p>
<!-- more -->

## postCss

### 前言
在之前使用 vue-cli webpack 模版的时候一直有个问题，它对有些 css 属性，例如多行溢出  `-webkit-box-orient: vertical;` 在编译之后会被干掉，但是在热编译的时候却是存在的。之前因为一时找不到原因，而且时间紧所以没去仔细研究到底是什么导致了这个问题，为什么官方的模版会有这个问题。

### 解决方法
1. 把下面对应的代码更改如下，即增加一个 `autoprefixer: false`
```
// webpack.prod.conf.js
new OptimizeCSSPlugin({
  cssProcessorOptions: config.build.productionSourceMap
    ? { safe: true, map: { inline: false }, autoprefixer: false}
    : { safe: true }
}),
```

2. 或者使用一些内连的样式或者是在 index.html 这类不会被编译的文件里面去写样式。【为什么不在 static 里面，因为觉得路径管理很麻烦】

### postCss
首先肯定能明确它是一个编译问题，更准确一点是 webpack 在进行 build 打包的时候采取了某些策略干掉了这个样式。 
查找的时候发现是 autoprefixer 捣的鬼，而它是 postCss 其中的一个工具，所以就从头开始理一下

[postCss](https://github.com/postcss/postcss)
- PostCSS 是一个允许使用 JS 插件转换样式的工具。 这些插件可以检查（lint）你的 CSS，支持 CSS Variables 和 Mixins， 编译尚未被浏览器广泛支持的先进的 CSS 语法，内联图片，以及其它很多优秀的功能。

- PostCSS 在工业界被广泛地应用，其中不乏很多有名的行业领导者，如：维基百科，Twitter，阿里巴巴， JetBrains。PostCSS 的 Autoprefixer 插件是最流行的 CSS 处理工具之一。

- PostCSS 接收一个 CSS 文件并提供了一个 API 来分析、修改它的规则（通过把 CSS 规则转换成一个抽象语法树的方式）。在这之后，这个 API 便可被许多插件利用来做有用的事情，比如寻错或自动添加 CSS vendor 前缀。

个人理解可能比较像一种 css loader，它和 webpack 一样，也有很多的插件，而 autoprefixer 是其中比较出名的一个，它允许根据设置来自动增加 css 兼容或者删除一些老旧的样式，比如我们只用写 `transition: height 0.4s;` 会自动编译成 `-webkit-transition: height 0.4s; transition: height 0.4s;`

### 使用
首先在 webpack 里面需要增加 postCss 的 loader 
``` js
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    }
}
```
然后去设置 postCss 的配置，这里设置有很多种方法，具体可以看[这篇](https://github.com/michael-ciniawsky/postcss-load-config)

在 vue-cli 里面采用的是使用 `.postcssrc.js` 
```js
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
```
以及在 package.json 中的 Browserslist
[Browserslist](https://github.com/browserslist/browserslist) 是用来配置浏览器兼容版本的工具，babel autoprefixer 等都可以根据在 Browserslist 中提供的需要兼容的浏览器版本进行有选择性的降级打包。[这个网站可以查询不同的配置兼容哪些浏览器 ](http://browserl.ist/?q=defaults)，一般来说我们配置成 defaults 就👌，或者就用 vue-cli webpack 模版里的。


除了这种正规的使用 loader 的配置 autoprefixer 的，还有另外一个插件也捣了鬼 `OptimizeCSSPlugin`，
实际上 loader 中的配置根本就没有去删除 `-webkit-box-orient: vertical;`，而是`OptimizeCSSPlugin` webpack 插件干的事，loader 中的配置确实跟随了 `package.json` 下的 `browserslist` 去做对应浏览器中的配置。但是`OptimizeCSSPlugin`没有。如果直接将 `webpack.prod.conf.js` 中的 `new OptimizeCSSPlugin` 给注释掉就会发现多行的样式没有被编译干掉，显示回来了。

### [OptimizeCSSPlugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
那么这个东西到底是干什么用的呢，模版中解释如下
> Compress extracted CSS. We are using this plugin so that possible duplicated CSS from different components can be deduped.

官方解释如下
> It will search for CSS assets during the Webpack build and will optimize \ minimize the CSS (by default it uses cssnano but a custom CSS processor can be specified).

>Solves extract-text-webpack-plugin CSS duplication problem:
Since extract-text-webpack-plugin only bundles (merges) text chunks, if its used to bundle CSS, the bundle might have duplicate entries (chunks can be duplicate free but when merged, duplicate CSS can be created).

它也是一个用于压缩，优化 css 文件的插件，默认用的 cssnano 处理器。主要是对打包的 css 去重
接下来跳到 [cssnano](https://github.com/cssnano/cssnano) 

官方说明
> cssnano is a modern, modular compression tool written on top of the PostCSS ecosystem, which allows us to use a lot of powerful features in order to compact CSS appropriately.

>Our preset system allow you to load cssnano in a different configuration depending on your needs; the default preset performs safe transforms, whereas the advanced preset performs more aggressive transforms that are safe only when your site meets the requirements; but regardless of the preset you choose, we handle more than whitespace transforms!

>Optimisations range from compressing colors & removing comments, to discarding overridden at-rules, normalising unicode-range descriptors, even mangling gradient parameters for a smaller output value! In addition, where it's made sense for a transform, we've added Browserslist to provide different output depending on the browsers that you support.

然后重点来了，他喵的这个玩意在 advanced 模式（OptimizeCSSPlugin默认开了这个模式）下默认会启用 autoprefixer，但是它的这个模式和上面所说的 autoprefixer 并不一样！它只负责删除！
`autoprefixer: Removes unnecessary prefixes based on the browsers option. Note that by default, it will not add new prefixes to the CSS file.`

所以这里就真相大白了。这个破玩意的设置导致了整个问题的发生，而且它藏的如此之深，and somehow 在 package.json 中的 Browserslist 并没有被它使用，它有一个自己单独得设置浏览器列表得选项，当没又被配置时就默认选择了比较高的版本配置，所以它就任性的删除了我们最开始的那一条样式`-webkit-box-orient: vertical;`

anyway 这个问题已经被人提过，而且已经被修复。。。
[issue1](https://github.com/webpack-contrib/css-loader/issues/281)
[issue2](https://github.com/cssnano/cssnano/issues/252)
[release 4.0](https://github.com/cssnano/cssnano/releases/tag/v4.0.0-rc.0)
```
By default, the following transforms are no longer applied to any input CSS.
You may see an increased output file size as a result:

autoprefixer
postcss-discard-unused
postcss-merge-idents
postcss-reduce-idents
postcss-zindex
```


只是`OptimizeCSSPlugin`并没有跟新，所以这个问题依旧存在

anyway。。问题依旧没有那么简单，当把`OptimizeCSSPlugin`升级到5.0之后再运行，又报了一个新的错误
```
 Cannot read property 'compilation' of undefined
    at OptimizeCssAssetsWebpackPlugin.apply (/Users/mfw/mfw_webpack/activity_city/node_modules/last-call-webpack-plugin/src/index.js:170:20)
```

= =. 跟到这里没想到又是一个坑。好吧，继续跟！

然鹅。。。发现了新版本只能在 webpack 4.0 中使用。so 如果想永久解决的话可能需要考虑下升级到 webpack4，但是升级到webpack4需要巨大的勇气，webpack4 本身还好，但是那一堆插件要找一个合适的能降级的就太麻烦了。

所以后续要不就整套升级 webpack4。要不就先使用上面说的方法先讲究使用
