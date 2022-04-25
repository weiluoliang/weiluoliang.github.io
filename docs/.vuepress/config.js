module.exports = {
    title: 'luoliang',
    description: '探索技术技术本质',
    themeConfig: {
        logo: 'logo.jpg',
        nav: [
            { text: '首页', link: '/' },
            { text: '导航', link: '/guide/' },
            { text: 'Google', link: 'https://google.com' },
          ],
        sidebar: [
            {
              title: '技术文章',   // 必要的
              path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: false, // 可选的, 默认值是 true,
              sidebarDepth: 1,    // 可选的, 默认值是 1
              children: [
                ['/', '首页']
              ]
            },
            {
              title: '悦读',
              children: [ /* ... */ ],
              initialOpenGroupIndex: -1 // 可选的, 默认值是 0
            }
          ]
    }
    
  }