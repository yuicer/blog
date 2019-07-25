---
title: dailyTip
date: 2019-07-11 14:28:40
tag: 砖头
---

### publish your scope npm without --access public

pkg config

```json
"publishConfig": {
  "access": "public"
},
```


### delete all local branches excpet master

`git branch | grep -v "master" | xargs git branch -D`