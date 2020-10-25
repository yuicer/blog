---
title: GithubPackages
date: 2019/09/28 08:33:01
tag: 砖头
img: 'https://ci4.googleusercontent.com/proxy/2iVfJzLufYkF8GSrcgXRD6Vn-qfA_GQFyBpi4uO0qsGuod31oy0UYYuP5Ws0PUbW787xFQT-FEDywZ8BhSDhMcaMWedQCQUESgYDmaeN-Ak4la2Y8RFLIo2L9Dm1vAQVJnC-UXjeNQUUKs1V8FPWYkFMeSKB0RGiuHY=s0-d-e1-ft#https://gallery.mailchimp.com/9d7ced8c4bbd6c2f238673f0f/images/564593a4-e918-4d30-b030-2c27f578a90d.png'
---

<!-- more -->

## intro

Today we will see the new features of the github **[GitHub Package Registry](https://github.com/features/package-registry?utm_source=announcement&utm_medium=email&utm_campaign=ww-gpr-beta) !**

[videos from 7:00](https://www.youtube.com/watch?v=N_-Cu9_2YAA)

since I receive the email of the gihub and they offered me beta access to GitHub Package Registry. I decide to have a look what's new here.

[this is offical configuration](https://help.github.com/en/articles/configuring-npm-for-use-with-github-package-registry)

## Authenticating to GitHub Package Registry

before we start this part, we need to know what's the **[github access token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)**

well, we often ues ssh-key for a authenticating of github or gitlab, 【 if you do not know what's the ssh, please check [here](https://help.github.com/en/articles/connecting-to-github-with-ssh) 】, but sometimes, we can not use ssh connect, so if we only have https connect, we will need to provide account & password or the **token**

we can enter the setting page of the github, and click the [Developer settings](https://github.com/settings/tokens),we will see **Personal access tokens** on the left sidebar.
then we need to click the **Generate new token** button to **[get a token](https://help.github.com/en/articles/creating-a-personal-access-token-for-the-command-line)**

> You must use a personal access token with the **read:packages** and **write:packages** scopes to publish and delete public packages in the GitHub Package Registry with npm. Your personal access token must also have the repo scope when the repository is private.

we can do like this, and click generate token.

> Treat your tokens like passwords and keep them secret. When working with the API, use tokens as environment variables instead of hardcoding them into your programs.

now we get the token, so we can use it to authenticate.

## login to github npm

```
$ npm login --registry=https://npm.pkg.github.com --scope=@YOURNAME
> Username: USERNAME
> Password: TOKEN
> Email: PUBLIC EMAIL ADDRESS
```

USERNAME will be your github name, TOKEN will be the token we had generated just now

if success, you will see `Logged in as USERNAME on https://npm.pkg.github.com/.`

## Publish your package

1. you will create a repo on github, name it `hello`, and then git clone your repo to local

2. create .npmrc file `echo registry=https://npm.pkg.github.com/USERNAME > .npmrc`, we have to specify the registry so npm will know this is a github package

3. verify the package.json filed `name` to be a scoped package, just like `@USERNAME/hello`

4. `npm publish`, if success , you will see your package at `https://github.com/USERNAME/hello/packages`

5. additional, if you want to publish a published package, you need to edit the package.json file, adding the flowing part

```json
"publishConfig": {
  "registry":"https://npm.pkg.github.com/",
  "access": "public"
}
```

## install a github packge

1. Also need .npmrc to specify which npm origin will be used `echo registry=https://npm.pkg.github.com/USERNAME > .npmrc`

2. npm install @USERNAME/hello
