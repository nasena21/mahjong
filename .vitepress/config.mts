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
      { rel: 'icon', type: 'image/png', href: '/mahjong/favicon.png' }
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
