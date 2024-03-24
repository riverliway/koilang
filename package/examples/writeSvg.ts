import { writeFileSync } from 'fs'

interface Viewbox {
  x: number
  y: number
  width: number
  height: number
}

/**
 * Writes the svg to a file
 * @param filename - the name of the file to write
 * @param paths - the paths to write to the file
 */
export const writeSvg = (filename: string, paths: string[], viewBox: Viewbox): void => {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" height="${viewBox.height - viewBox.y}px" viewBox="${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}" width="${viewBox.width - viewBox.x}px" style="&#10;    fill: black;&#10;    stroke: black;&#10;    stroke-width: 1;&#10;">
${writePaths(paths)}
</svg>`

  writeFileSync(filename, svg)
}

const writePaths = (paths: string[]): string => {
  return paths.map(path => `<path d="${path}"/>`).join('\n')
}
