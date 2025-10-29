
// function maxMinSort(arr) {
//     const minMax = {}
//     arr.sort((a,b) => a - b)
//     minMax.min = arr[0]
//     minMax.max = arr[arr.length - 1]
//     return minMax;
// }
// O(n log n)
// O(1)

function maxMinSort(arr) {
  let max = 0;
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
    } else if (arr[i] < min)
      min = arr[i]
  }
  return { max, min }
}
// Time Complexity (TC): O(n) — the function processes each element once.
// Space Complexity (SC): O(1) — only constant space is used.
let arr = [12, 91, 31, 93, 9, 63]

let v = maxMinSort(arr)

console.log("The maximum number is" + v.max)
console.log("The minimum number is " + v.min)