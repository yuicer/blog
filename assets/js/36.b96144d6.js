(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{430:function(s,t,a){"use strict";a.r(t);var n=a(5),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("最近使用 ts 进行编写包的时候遇到一个问题。使用 "),t("code",[s._v("tsconfig.json")]),s._v(" 中的 "),t("code",[s._v("declaration: true")]),s._v(" 生成的 d.ts 文件中，模块之间的路径引用依然还是别名。这就会导致被别的项目引用时报错找不到模块。那么为什么 ts 提供了 "),t("code",[s._v("baseUrl path")]),s._v(" 参数，支持使用别名之后，生成出来的声明文件依然有这个问题呢？")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// index.d.ts\n\nimport {a} from @alias\n// it should be import {a} from './A'\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"ts-的说辞"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ts-的说辞"}},[s._v("#")]),s._v(" ts 的说辞")]),s._v(" "),t("p",[s._v("在官方仓库里面搜索关键词 "),t("code",[s._v("absolute path relative npm")]),s._v("，这里会有很多相关的问题，这里举一个 🌰"),t("a",{attrs:{href:"https://github.com/microsoft/TypeScript/issues/25677",target:"_blank",rel:"noopener noreferrer"}},[s._v("例子"),t("OutboundLink")],1),s._v(" ，官方的观点是，"),t("code",[s._v("**ts 做的事情应该且必须局限于【类型】**")]),s._v("，我不做任何有关代码功能，或者改变代码的事情。我只做类型的增强和检查。这一点体现很明细的就是 tsconfig.json 这个东西。但是你可能会发现，这不对啊。 tsconfig.json 里面也有很多会影响到编译的选项啊，它的很多不是和 webpack 配置差不多吗。 "),t("code",[s._v("tsc build")]),s._v(" 不就会走配置吗。确实，这个地方会造成困扰\n。这里不展开描述，可以去查一下【"),t("code",[s._v("tsc bable webpack")]),s._v("】三者直接的关系和区别。这里从结论上来说，"),t("code",[s._v("tsconfig.json")]),s._v(" 是给 "),t("code",[s._v("tsc || webpack ts loader")]),s._v(" 用的，它确实有一定的编译功能，但是很局限。它的大多作用还是在于类型方面。")]),s._v(" "),t("h3",{attrs:{id:"解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),t("p",[s._v("多亏 issue 中的各位老哥，这里粘贴一个对我有用的方法，首先下载下面这两个包，然后更改 tsconfig.json ，添加如下代码。")]),s._v(" "),t("p",[s._v("ps: 如果是使用 webpack rollup 等工具的话，可以参考 "),t("a",{attrs:{href:"https://github.com/cevek/ttypescript/#webpack",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),t("OutboundLink")],1),s._v(" 来配置 loader")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm i -D ttypescript typescript-transform-paths\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('// tsconfig.json\n{\n  "compilerOptions": {\n    "plugins": [\n      {\n        "transform": "typescript-transform-paths",\n        "afterDeclarations": true\n      }\n    ]\n  }\n}\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("// if with webpack\n {\n    test: /\\.ts$/,\n    use: [\n      {\n        loader: 'ts-loader',\n        options: {\n          compiler: 'ttypescript',\n        },\n      },\n    ]\n  }\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);