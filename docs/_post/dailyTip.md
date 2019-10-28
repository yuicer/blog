---
title: daily tip
date: 2019-07-11 14:28:40
tag: 砖头
---

### JSON.stringify(value[, replacer [, space]])
`JSON.stringify(data, undefined, 4)`  可以进行格式美化

replacer > 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为null或者未提供，则对象所有的属性都会被序列化；关于该参数更详细的解释和示例，请参考使用原生的 JSON 对象一文。

space > 指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；如果该参数没有提供（或者为null）将没有空格。

### lerna related

1. 当使用 yarn 的 workspaces 时，yarn 命令会直接提取所有 packages 下面的依赖安装到跟目录中，并帮忙做好 link 功能。这个时候 `lenra bootstrap` 不会生效，但是 lerna link 依旧会起作用
2. 当使用 `lerna publish` 失败之后，可以使用 `lerna publish from-package` 来再次发布。

### git diff

write diff which excludes docs folder to certain file `git diff v1.0.0 -- . ':!docs' > diff_with_1.1.0_version.diff`

### reverse-i-search

press `ctrl + r`, and you can easily find what you have typied before

### git filter-branch

[github:removing-sensitive-data-from-a-repository](https://help.github.com/en/articles/removing-sensitive-data-from-a-repository)
[git:重寫歷史](https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2)

### \$mount meaning

provide an entrance for a function or feature

### publish your scope npm without --access public

pkg config

```json
"publishConfig": {
  "access": "public"
},
```

### delete all local branches excpet master

`git branch | grep -v "master" | xargs git branch -D`

### url format

`<scheme>://<user>:<password>@<host>:<port>/<url-path>`
