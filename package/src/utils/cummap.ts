
/**
 * Maps an array cumulatively, calling the callback for each element with the previous value
 * @param arr - The array to map cumulatively
 * @param callback - The callback to call for each element
 * @returns The array mapped cumulatively
 */
export const cummap = <I, O>(arr: I[], callback: (val: I, prevVal: O | undefined, index: number) => O): O[] => {
  let prevVal: O | undefined
  return arr.map((val, index) => {
    const newVal = callback(val, prevVal, index)
    prevVal = newVal
    return newVal
  })
}
