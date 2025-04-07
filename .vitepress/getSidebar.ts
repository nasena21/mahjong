import fs from 'fs'
import path from 'path'

const docsRoot = path.resolve(__dirname, '../docs')

// Manually control the order of folders here

const manualOrder = [
    { dir: '01_guide', collapsed: false },
    { dir: '02_yaku', collapsed: true },
    { dir: '03_rules', collapsed: true },
    { dir: '04_extra', collapsed: true }   
  ]

function toTitleCase(str: string): string {
  return str
    .replace(/^\d+_/, '') // Remove number prefix like "01_"
    .replace(/-/g, ' ')
    .replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}

function readDirManualOrder() {
    return manualOrder.map(({ dir, collapsed }) => { // ← Destructure here
      const fullPath = path.join(docsRoot, dir)
      if (!fs.existsSync(fullPath)) return null
  
      const files = fs.readdirSync(fullPath, { withFileTypes: true })
        .filter(f => f.isFile() && f.name.endsWith('.md'))
  
      const items = files.map(f => {
        const name = f.name.replace(/\.md$/, '')
        const link = name === 'index' ? `/${dir}/` : `/${dir}/${name}`
        return {
          text: toTitleCase(name),
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
