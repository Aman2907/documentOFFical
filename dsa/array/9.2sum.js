


//brute
function twosum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] + arr[j] == num) {
        return { i, j }
      }
    }
  } return false;
}
// O(N2)

// let arr1 = [2, 6, 5, 8, 11]



//hashmap
function twosum(arr, tar) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    let complement = tar - num;

    // if (map.hasOwnProperty(comp)) {
    //   return true
    // }
    if (map.has(complement)) {
      return true;
    }

    //if require index
    map[num] = i;

  }
  return false
}
//both o(n)


let arr1 = [2, 6, 5, 8, 11]
let k = 131

let x = twosum(arr1, k)
console.log(x)






