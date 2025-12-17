import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/agent-manual-site/',
  title: "超站操作手册", // 名字改得很好
  description: "南湾全球海外仓操作文档", // 这里可以改成中文描述
  themeConfig: {
    nav: [
      { text: '首页', link: '/' }, // 改成中文“首页”更亲切
      { text: '操作手册', link: '/manual' }
    ],

    sidebar: [
      {
        text: '文档目录', // 建议把 "Examples" 改成 "文档目录"
        items: [
          // 把默认的 Examples 删掉或注释掉，只留你的手册
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          // { text: 'Runtime API Examples', link: '/api-examples' },
          { text: '操作手册', link: '/manual' } 
        ]
      }
    ],

    socialLinks: [
      // 这里的链接建议改成你自己的 GitHub 仓库地址
      { icon: 'github', link: 'https://github.com/xincheng121/agent-manual-site' }
    ]
  }
})