import { defineConfig } from 'vitepress'

export default defineConfig({
  // 部署到 GitHub Pages 的仓库名，必须有
  base: '/agent-manual-site/', 
  
  title: "超站操作手册",
  description: "AI 业务操作指南",
  
  themeConfig: {
    // 顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '操作手册', link: '/manual' }
    ],

    // 左侧侧边栏
    sidebar: [
      {
        text: '文档目录',
        items: [
          { text: '操作手册', link: '/manual' },
          { text: 'API 示例', link: '/api-examples' }
        ]
      }
    ],

    // 你的 GitHub 链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xincheng121/agent-manual-site' }
    ]
  }
})