import { Coord, distance, locateMidpoint } from 'inkbrush/lib/vector'

/**
 * @param a - The orthogonal coordinate
 * @param b - The first coordidate of the line segment
 * @param c - The second coordinate of the line segment
 * @returns the ratio of the distance from the orthogonal coordinate to the midpoint of the line segment to the line segment's distance
 */
export const orthoRatio = (a: Coord, b: Coord, c: Coord): number => {
  return distance(a, locateMidpoint(b, c)) / distance(b, c)
}
