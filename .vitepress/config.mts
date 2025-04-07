import { defineConfig } from 'vitepress'
import { getSidebar } from './getSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Riichi Mahjong",
  description: "Riichi Mahjong Indonesia",
  base: '/mahjong/',
  srcDir: 'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: getSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

