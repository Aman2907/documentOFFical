

// remove dublicate - Remove Duplicates in-place from Sorted Array
// Input: arr[1,1,2,2,2,3,3]
// Output: arr[1,2,3,_,_,_,_]


// function dublicatehata(arr) {
//     let i = 0;
//     for (let j = 1; j < arr.length; j++) {
//         if (arr[i] !== arr[j]) {
//             i++;
//             arr[i] = arr[j];
//         }
//     }
//     return i + 1;
// }
// Time complexity: O(n*log(n))+O(n))
// Space Complexity: O(n) 


// const arr1 = [1, 1, 2, 2, 3, 3,14,14,53]
// const k = dublicatehata(arr1);

// console.log("The dublicate length is "+ k + " And after removing")
// for (let i = 0; i < k; i++) {
//     console.log(arr1[i]);
// }


function removedub(arr) {
    const newUniq = new Set(arr);
    const unqi = Array.from(newUniq);
    return unqi.sort()
}
// O(n log n)
// O(n)


let arr1 = [1, 4, 6, 2, 5, 2, 5, 9]
let x = removedub(arr1)
console.log(x)

for (let i = 0; i < x; i++) {
    console.log(arr[i])
}