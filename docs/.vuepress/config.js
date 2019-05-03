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
  theme: '@yuicer/yuicer',
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  base: '/',
  themeConfig: {
    bgImg: 'https://img.yuicer.com/bg/beach.jpg',
    repo: 'yuicer/blog',
    nav: [
      {
        text: 'Links',
        items: [
          { text: 'Twitter', link: 'https://twitter.com/yuicer1' },
          { text: 'Blibili', link: 'https://space.bilibili.com/3069623' }
        ]
      }
    ]
    // ga: ''
  }
}
