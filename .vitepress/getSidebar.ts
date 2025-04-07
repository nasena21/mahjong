import fs from 'fs'
import path from 'path'

const docsRoot = path.resolve(__dirname, '../docs')

// Optional: Manually control folder order
const manualOrder = [
  '01_guide',
  '02_yaku',
  '03_rules'
]

function toTitleCase(str: string): string {
  return str
    .replace(/^\d+_/, '') // Remove folder number prefix
    .replace(/-/g, ' ')
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}

function readDirManualOrder() {
  return manualOrder.map(dir => {
    const fullPath = path.join(docsRoot, dir)
    if (!fs.existsSync(fullPath)) return null

    const files = fs.readdirSync(fullPath, { withFileTypes: true })
      .filter(f => f.isFile() && f.name.endsWith('.md') && f.name !== 'index.md')

    const items = files.map(f => {
      const name = f.name.replace(/\.md$/, '')
      return {
        text: toTitleCase(name),
        link: `/${dir}/${name}`
      }
    })

    return {
      text: toTitleCase(dir),
      collapsed: true,
      items
    }
  }).filter(Boolean)
}

export function getSidebar() {
  return readDirManualOrder()
}
