import fs from 'fs'
import path from 'path'

const docsRoot = path.resolve(__dirname, '../docs')

// Manually control the order of folders here
const manualOrder = [
  { dir: '01_About', collapsed: false },
  { dir: '01_Introduction_to_Tenhou', collapsed: false },
  { dir: '02_Advanced_features_of_Tenhou', collapsed: false },
  { dir: '03_Riichi_mahjong_basics', collapsed: false },
  { dir: '04_The_ﬁve-block_method', collapsed: false },
  { dir: '05_Pursuing_yaku', collapsed: false },
  { dir: '06_Scoring', collapsed: false },
  { dir: '07_Riichi_judgement', collapsed: false },
  { dir: '08_Defense_judgement', collapsed: false },
  { dir: '09_Melding_judgement', collapsed: false },
  { dir: '10_Grand_strategies', collapsed: false },
  { dir: '11_Manners_for_oﬄine_playing', collapsed: false },
  { dir: '12_Further_readings', collapsed: false }
];

function toTitleCase(str: string): string {
  // Remove the leading digits and any following underscores or hyphens
  const withoutPrefix = str.replace(/^\d+[_-]+/, '');
  // Replace underscores or hyphens with a space
  const withSpaces = withoutPrefix.replace(/[_-]+/g, ' ');
  // Convert each word: first letter uppercase, rest lowercase
  return withSpaces
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function readDirManualOrder() {
  return manualOrder.map(({ dir, collapsed }) => { // ← Destructure here
    const fullPath = path.join(docsRoot, dir)
    if (!fs.existsSync(fullPath)) return null

    const files = fs.readdirSync(fullPath, { withFileTypes: true })
      .filter(f => f.isFile() && f.name.endsWith('.md'))

    const items = files.map(f => {
      const name = f.name.replace(/\.md$/, '')
      // If the file name starts with a number prefix, remove it and replace underscores with spaces
      const text = toTitleCase(name);
      const link = name === 'index' ? `/${dir}/` : `/${dir}/${name}`
      return {
        text,
        link
      }
    })

    return {
      text: toTitleCase(dir),
      collapsed,
      items
    }
  }).filter(Boolean)
}

export function getSidebar() {
  return readDirManualOrder()
}
