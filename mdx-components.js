import YoutubeEmbed from './components/youtube-embed'
import { MapGrid, MapTile } from './components/map-grid'
import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs' // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents()

// Merge components
export function useMDXComponents(components) {
  return {
    ...themeComponents,
    YoutubeEmbed,
    MapGrid,
    MapTile,
    ...components
  }
}