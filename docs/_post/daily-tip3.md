---
title: daily-tip3
date: 2020/07/13 12:48:34
tag: 砖头
img: /img/20200703-1.png
---

## disable .ds_store auto generated in mac

[.DS_Store](https://zh.wikipedia.org/zh-hans/.DS_Store)
`defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE`

## make alias with zsh

`alias [custom-alias]="[command]"`
example
`alias devbox="ssh xxx@xx.xx.xx.xx"`

## dyld brew

```
dyld: Library not loaded: /usr/local/opt/icu4c/lib/libicui18n.64.dylib
  Referenced from: /usr/local/bin/node
  Reason: image not found
```

this problem is causing by error link node version. you can use `brew upgrade node` or `brew upgrade` to upgrade all packages.
