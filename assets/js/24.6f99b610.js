(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{418:function(e,a,s){"use strict";s.r(a);var t=s(5),n=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"remote-git-auth-failed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remote-git-auth-failed"}},[e._v("#")]),e._v(" remote git auth failed")]),e._v(" "),a("p",[e._v("Support for password authentication was removed on August 13, 2021.\nremote: Please see https://docs.github.com/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.\nfatal: Authentication failed for 'xxx.git/'")]),e._v(" "),a("p",[e._v("use personal access token as password")]),e._v(" "),a("p",[e._v("refer: https://stackoverflow.com/questions/68775869/message-support-for-password-authentication-was-removed")]),e._v(" "),a("h2",{attrs:{id:"visual-viewport"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#visual-viewport"}},[e._v("#")]),e._v(" Visual Viewport")]),e._v(" "),a("p",[e._v("this api may be can be used to detect input(sougou) hegiht when focusd on input element at mobile page development scene")]),e._v(" "),a("h2",{attrs:{id:"promise-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise-status"}},[e._v("#")]),e._v(" promise status")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('function promiseState(p) {\n  const t = {};\n  return Promise.race([p, t])\n    .then(v => (v === t)? "pending" : "fulfilled", () => "rejected");\n}\n\nvar a = Promise.resolve();\nvar b = Promise.reject();\nvar c = new Promise(() => {});\n\npromiseState(a).then(state => console.log(state)); // fulfilled\npromiseState(b).then(state => console.log(state)); // rejected\npromiseState(c).then(state => console.log(state)); // pending\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br")])]),a("h2",{attrs:{id:"gc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gc"}},[e._v("#")]),e._v(" gc")]),e._v(" "),a("p",[e._v("refer => traversal all the node to find not referred (but can not solve loop refer)\nmark-clear => find from the root, reachable node will be stay(sort optional), others will be clear")]),e._v(" "),a("h2",{attrs:{id:"find-port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find-port"}},[e._v("#")]),e._v(" find port")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("netstat -anp | grep 3009\nkill -9 2347946\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("h2",{attrs:{id:"github-auth-failed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-auth-failed"}},[e._v("#")]),e._v(" github auth failed")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n@ WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! @\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\nIt is also possible that a host key has just been changed.\nThe fingerprint for the RSA key sent by the remote host is\nSHA256:uNiVztksCsDhcc0u9e8BujQXVUpKZIDTMczCvj3tD2s.\nPlease contact your system administrator.\nAdd correct host key in ~/.ssh/known_hosts to get rid of this message.\nHost key for github.com has changed and you have requested strict checking.\nHost key verification failed.\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br")])]),a("p",[e._v("just run")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssh-keygen -R github.com\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"performance-now"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-now"}},[e._v("#")]),e._v(" performance.now()")]),e._v(" "),a("p",[e._v("Unlike Date.now, the timestamps returned by performance.now() are not limited to one-millisecond resolution. Instead, they represent times as floating-point numbers with up to microsecond precision.")]),e._v(" "),a("p",[e._v("Also, Date.now() may have been impacted by system and user clock adjustments, clock skew, etc. as it is relative to the Unix epoch (1970-01-01T00:00:00Z) and dependent on the system clock. The performance.now() method on the other hand is relative to the timeOrigin property which is a monotonic clock: its current time never decreases and isn't subject to adjustments.")]),e._v(" "),a("p",[a("code",[e._v("currentTime = performance.timeOrigin + performance.now();")])]),e._v(" "),a("h2",{attrs:{id:"fetch-png-jpg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fetch-png-jpg"}},[e._v("#")]),e._v(" fetch png/jpg")]),e._v(" "),a("p",[e._v("so how to get the imageData in Node like browser")]),e._v(" "),a("p",[e._v("node")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("import { PNG } from 'pngjs';\nconst data = await fetch(imgUrl, {\n   method: 'get',\n   headers: {\n   'responseType': 'arraybuffer'\n   }\n});\nconst arrayBuffer = await data.arrayBuffer();\nconst imgData = PNG.sync.read(Buffer.from(arrayBuffer1));\nconsole.log('imgData:', imgData);\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("browser")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const domImg = document.getElement('#img')\nconst canvas = document.getElement('#canvas')\nconst ctx = canvas.getContext('2d')\nctx.drawImage(domImg,0,0,width?,height?)\nconst imgData = ctx.getImageData(0,0,500,500)\nconsole.log('imgData:', imgData)\nctx.clearRect(0,0,500,500)\nctx.putImageData(imgData,40,40)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('data: Uint8ClampedArray(1000000) [216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, 216, 216, 218, 255, …]\ncolorSpace: "srgb",\nheight: 500,\nwidth: 500,\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"absorb-page-color"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#absorb-page-color"}},[e._v("#")]),e._v(" absorb page color")]),e._v(" "),a("ol",[a("li",[e._v("html to canvas\n"),a("ol",[a("li",[e._v("get all dom in view, and use dsl (basic dom-css to canvas api) to transfer to canvas, and toImageData to get color")])])]),e._v(" "),a("li",[e._v("window."),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper",target:"_blank",rel:"noopener noreferrer"}},[e._v("eyedropper"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("get specific dom computed style")])]),e._v(" "),a("h2",{attrs:{id:"cario-vs-skia"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cario-vs-skia"}},[e._v("#")]),e._v(" cario vs skia")]),e._v(" "),a("p",[e._v("Cairo c 语言实现，优点包括可移植性，支持多种设备平台；它可以创建栅格和向量图像，具有良好的可扩展性，以及可扩展的输出格式。与 Skia 相比，Cairo 对文本和图形渲染的支持也更为丰富。\nCairo 的主要缺点是其性能不如 Skia，这使得它适合绘制较复杂的图形而不是动画或游戏。另外，Cairo 的 API 功能也不如 Skia 那样广泛，并且不能很好地支持 Android 开发。")]),e._v(" "),a("p",[e._v("skia c++")]),e._v(" "),a("h2",{attrs:{id:"node-canvas-install-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-canvas-install-problems"}},[e._v("#")]),e._v(" node-canvas install problems")]),e._v(" "),a("p",[e._v("https://github.com/Automattic/node-canvas/wiki/Installation:-Windows")])])}),[],!1,null,null,null);a.default=n.exports}}]);