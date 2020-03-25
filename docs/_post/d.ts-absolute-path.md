---
  title: d.ts absolute path
  date: 2020/03/14 11:01:40
---
  
###  前言
最近使用 ts 进行编写包的时候遇到一个问题。使用 `tsconfig.json` 中的 `declaration: true` 生成的 d.ts 文件中，模块之间的路径引用依然还是别名。这就会导致被别的项目引用时报错找不到模块。那么为什么 ts 提供了 `baseUrl path` 参数，支持使用别名之后，生成出来的声明文件依然有这个问题呢？

```
// index.d.ts

import {a} from @alias
// it should be import {a} from './A'
```

### ts 的说辞
在官方仓库里面搜索关键词 `absolute path relative npm`，这里会有很多相关的问题，这里举一个 🌰[例子](https://github.com/microsoft/TypeScript/issues/25677) ，官方的观点是，`**ts 做的事情应该且必须局限于【类型】**`，我不做任何有关代码功能，或者改变代码的事情。我只做类型的增强和检查。这一点体现很明细的就是 tsconfig.json 这个东西。但是你可能会发现，这不对啊。 tsconfig.json 里面也有很多会影响到编译的选项啊，它的很多不是和 webpack 配置差不多吗。 `tsc build` 不就会走配置吗。确实，这个地方会造成困扰
。这里不展开描述，可以去查一下【`tsc bable webpack`】三者直接的关系和区别。这里从结论上来说，`tsconfig.json` 是给 `tsc || webpack ts loader` 用的，它确实有一定的编译功能，但是很局限。它的大多作用还是在于类型方面。

### 解决
多亏 issue 中的各位老哥，这里粘贴一个对我有用的方法，首先下载下面这两个包，然后更改 tsconfig.json ，添加如下代码。

ps: 如果是使用 webpack rollup 等工具的话，可以参考 [这里](https://github.com/cevek/ttypescript/#webpack) 来配置 loader

```
npm i -D ttypescript typescript-transform-paths
```

```
// tsconfig.json
{
  "compilerOptions": {
    "plugins": [
      {
        "transform": "typescript-transform-paths",
        "afterDeclarations": true
      }
    ]
  }
}
```

```
// if with webpack
 {
    test: /\.ts$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          compiler: 'ttypescript',
        },
      },
    ]
  }
```