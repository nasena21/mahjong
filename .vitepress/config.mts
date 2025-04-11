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
      { text: 'Guide', link: '/00_About/01_Introduction' }
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
  documentRootPath: '.', 
  collapsed: false,
  prefixSeparator: '_',
  capitalizeFirst: true,
  removePrefixAfterOrdering: true,
  useTitleFromFrontmatter: true,
  sortMenusByFrontmatterOrder: true, // ✅ use frontmatter order to sort
  useFolderTitleFromIndexFile: true
}




export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions),
);
