const path = require('path')

module.exports = {
  title: 'yuicer',
  description: 'colorful wanted',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'http://yuicer.com/images/me.config/me.png'
      }
    ]
  ],
  // theme: 'yubisaki',
  theme: '@yuicer/yuicer',
  themeConfig: {
    sidebar: false,
    lastUpdated: '跟新于',
    nav: [
      {
        text: 'Github',
        link: 'https://github.com/yuicer'
      }
    ]
  },
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  base: '/'
}
