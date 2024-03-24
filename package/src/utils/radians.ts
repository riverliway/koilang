import { Coord } from 'inkbrush/lib/vector'

/**
 * @param degrees - The degrees to convert to radians
 * @returns The degrees converted to radians
 */
export const radians = (degrees: number): number => {
  return degrees * (Math.PI / 180)
}

/**
 * @param coord - the coordinate to rotate
 * @param rotation - the rotation in radians
 * @returns the rotated coordinate
 */
export const rotate = (coord: Coord, rotation: number): Coord => {
  return { 
    x: coord.x * Math.cos(rotation) - coord.y * Math.sin(rotation),
    y: coord.x * Math.sin(rotation) + coord.y * Math.cos(rotation)
  }
}
