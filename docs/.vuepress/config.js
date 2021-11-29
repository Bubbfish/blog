module.exports = {
    lang: 'zh-CN',
    title: '你好， VuePress ！',
    description: '这是我的第一个 VuePress 站点',
  
    themeConfig: {
      logo: 'https://vuejs.org/images/logo.png',
      navbar: [
        // NavbarItem
        {
          text: 'Foo',
          link: '/vue/',
        },
        // NavbarGroup
        {
          text: 'Group',
          children: ['/js/js1.md', '/js/js1.md'],
        },
        // 字符串 - 页面文件路径
        '/bar/README.md',
      ],
    },
  }