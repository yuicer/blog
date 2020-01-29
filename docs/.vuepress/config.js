module.exports = {
  title: 'yuicer',
  description: 'colorful wanted',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://img.yuicer.com/me.config/me.png'
      }
    ]
  ],
  theme: '@yuicer/yuicer',
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  base: '/',
  plugins: [
    [
      'vuepress-plugin-mathjax',
      {
        target: 'svg'
      }
    ]
  ],
  themeConfig: {
    bgImg: 'https://img.yuicer.com/bg/winter.jpg',
    repo: 'yuicer/vuepress-theme-yuicer',
    nav: [
      {
        text: 'Links',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/yuicer1' },
          { text: 'Blibili', link: 'https://space.bilibili.com/3069623' }
        ]
      }
    ],
    ga: 'UA-139861258-1'
  }
}
