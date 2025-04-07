import { defineConfig } from 'vitepress'
import { getSidebar } from './getSidebar.ts'

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
      { text: 'Guide', link: '01_guide/01_Yaku' }
    ],

    sidebar: getSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

