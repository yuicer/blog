---
title: daily tip
date: 2019-07-11 14:28:40
tag: 砖头
---

### git filter-branch

[github:removing-sensitive-data-from-a-repository](https://help.github.com/en/articles/removing-sensitive-data-from-a-repository)
[git:重寫歷史](https://git-scm.com/book/zh/v1/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E5%86%99%E5%8E%86%E5%8F%B2)


### $mount meaning
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