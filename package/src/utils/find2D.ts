
/**
 * @param arr - 2D array to search
 * @param target - target string to find
 * @returns the index of the target string in the 2D array
 */
export const find2D = (arr: string[][], target: string): [number, number] | undefined => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) {
        return [i, j]
      }
    }
  }
  return undefined
}
