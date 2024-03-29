---
title: Daily tip 03
date: 2021/11/16 12:48:34
startDate: 2020/07/13 12:48:34
tag: 砖头
img: /img/20200703-1.png
---

## extends

```
interface IOption {
  id: number;
}

interface IA<T extends IOption> {
  init:(option: T) => void;
}

interface IAOption extends IOption{
  a: number;
}

class A implements IA<IOption> {
  init(option: IOption){}
}

interface IB extends IA<IAOption> {
  init:(option: IAOption) => void;
}

class B extends A implements IB {
  init(option: IAOption){}
}


```

## peer dependencies

npm versions 1, 2, and 7 will automatically install peerDependencies if they are not explicitly depended upon higher in the dependency tree. For npm versions 3 through 6, you will receive a warning that the peerDependency is not installed instead.

## app link

1. shema

when app installed, the app will add one custome protocol into ios system. like weixin://. But this method will be forbidened by some app and is not smooth enough

1. [Universal link](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html#//apple_ref/doc/uid/TP40016308-CH12-SW1)

iOS users can tap a link to your website and get seamlessly redirected to your installed app without going through Safari. If your app isn’t installed, tapping a link to your website opens your website in Safari.

- Create an apple-app-site-association file that contains JSON data about the URLs that your app can handle.

- Upload the apple-app-site-association file to your HTTPS web server. You can place the file at the root of your server or in the .well-known subdirectory.

- Prepare your app to handle universal links.

## bisect

`git bisect start` can start a quick find for git commit  
`git bisect bad/old` tag current commit as a bad code
`git bisect good/new commit-1` tag commit-1 commit as a good code

and from now, git will automatical checkout to middle commit，and you need to tag good or bad untill you find the bug

`git bisect reset` will end this debug

## 300ms tap delay

`<meta name="viewport" content="width=device-width">`

[detail](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away)

## CSP

https://developers.google.com/web/fundamentals/security/csp?hl=zh-cn

only load code from specific uri

`script-src https://host1.com https://host2.com`

or with default-src

`Content-Security-Policy: default-src https://cdn.example.net; child-src 'none'; object-src 'none'`

at first, you can use `Content-Security-Policy-Report-Only`

`script-src 'unsafe-eval'` will enabel evel Function
`script-src 'unsafe-inline'` will enabel inline script

## isPointInStroke isPointInPath

"path" will use close path (if path not close, it will use ctx.closePath automatically)

"stroke" will detect the real pixel stroke

<iframe src="/demo/demo_211116/index.html" frameborder="no" marginwidth="0" marginheight="0" width="200" height="300"></iframe>

## npm deprecate

[deprecate](https://docs.npmjs.com/cli/v7/commands/npm-deprecate)

to info users warning

## lerna skip changed check

`--force-publish`

## mobile browser event quene

touchstart touchend mousemove mousedoen mouseup click

## git delete latest tag

`git tag -d $(git log --date-order --tags --simplify-by-decoration --pretty=format:'%d' | head -1 | tr -d '()' | sed 's/,* tag://g')`

## reset first git commit

`git update-ref -d HEAD`
[update-ref](https://git-scm.com/docs/git-update-ref)

you need to delete current branch and push force again

## git delete origin tag

```s
git push origin --delete <tagname>
```

## lerna: skip partial packages using leran publish

lerna did support `lerna run xxx --scope pkg1`. but `scope` do not work when using `publish`

there has a lot of issues about this, but none of them mentioned how to solve it, cause the maintainer insist that

> Because it breaks the fundamental mechanism Lerna uses to determine which packages need to be published? Absolutely nothing stopping you from not placing several packages in the same monorepo that apparently shouldn't be.  
>  ------ @evocateur

> As I noted above, this is impossible due to the manner in which lerna coordinates versions with git tags (and the diff since the last one is what indicates which packages should be published).
> ------ @evocateur

> If they are both independent, and you don’t want to publish them at the same time, then don’t use lerna, it’s clearly not necessary for your use case.
> ------ @evocateur

until..... I fonud [this_commit](https://github.com/lerna/lerna/commit/a9b9f97457e4e4b0cac7f4ce562458d921a1f9be)

I test the `lerna publish --no-private`, it did work for me on version 3.22.1

but stil `lerna publish --help` did not show this config :)

## yarn workspace nohoist

[doc_here](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)

workspaces looks good. but sometimes it's not so that smart. it juset can't completely figure out the package should place in the root node_modules or the child project node_modules

so like the artificial intelligence, it need some help.

```ts
// root project package.json
"workspaces":{
  "packages": ["./A","./B"],
  "nohoist": ["**/react-native"]
},
// child project package.json
"workspaces": {
  "nohoist": ["react-native", "react-native/**"]
}
```

## unhandledRejection

In frontend project, sometimes, somehow, there will be somewhy error like `unhandledRejection`

but this error do not show where it is :(

so with the code below, you can catch them easily!

```ts
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
});
```

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
