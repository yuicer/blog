module.exports = {
  title: 'yuicer',
  description: 'colorful wanted',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'https://img.yuicer.com/me.config/me.png',
      },
    ],
  ],
  theme: '@yuicer/yuicer',
  markdown: {
    lineNumbers: true,
  },

  evergreen: true,
  base: '/',
  themeConfig: {
    bgImg: 'https://cdn.jsdelivr.net/gh/yuicer/images/bg/winter.jpg',
    logo: 'https://cdn.jsdelivr.net/gh/yuicer/images/me.config/me.png',
    links: [
      {
        text: 'github',
        link: 'https://github.com/yuicer',
      },
      {
        text: 'B 站',
        link: 'https://space.bilibili.com/3069623',
      },
    ],
    comment: {
      owner: 'yuicer',
      repo: 'blog',
      clientId: '74ba6fa442f991097675',
      clientSecret: '6b4ea5c9d19b96fb01e9ed019bed4a19a81b0216',
    },
    ga: 'UA-139861258-1',
  },
};
