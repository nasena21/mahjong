import { defineConfig } from 'vitepress';
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
  title: "Riichi Mahjong",
  description: "Riichi Mahjong Indonesia",
  base: '/mahjong/',
  head: [
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' }
    ],
    [
      'link',
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }
    ],
    [
      'link',
      { rel: 'icon', href: '/mahjong/favicon.png' }
    ],
    [
      'link',
      { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" rel="stylesheet', rel: 'stylesheet' }
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/01_Guide/01_Yaku' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    // ✅ Add search config inside themeConfig
    search: {
      provider: 'local'
    }
  }
}

const vitePressSidebarOptions = {
  documentRootPath: '.', // ✅ Correct root
  collapsed: false,
  prefixSeparator: '_',
  capitalizeFirst: true, // ✅ auto capitalize
  removePrefixAfterOrdering: true, // ✅ remove `01_`
  sortMenusOrderNumericallyFromTitle: true,
  useTitleFromFrontmatter: true // ✅ use title from index.md
};


export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions),
);
