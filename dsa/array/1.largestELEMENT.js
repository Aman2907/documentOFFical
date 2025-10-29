

// find the largest element in the array let arr1 = [23,4,1,611,5,114]
// 1)brute force

// function sortArr(array){
//     array.sort((a,b)=> a - b)
//     return array[array.length - 2]
// }
// let arr1 = [23,4,1,611,5,114]
// console.log(sortArr(arr1))

// Time complexity: O(n log n)
// Space complexity: O(n)


// 2) optimize way

function sortkaro(array) {
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i]
        }
    }
    return max;
}

const arr1 = [23, 4, 311, 611, 5, 114];
let yo = sortkaro(arr1)
console.log(yo)

// Time complexity: O(n)
// Space complexity: O(1)