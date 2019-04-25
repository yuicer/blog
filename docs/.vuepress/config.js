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
  // theme: 'reco',
  theme: '@yuicer/yuicer',
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  base: '/'
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}
