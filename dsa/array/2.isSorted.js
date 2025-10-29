
// sorted or not

function sortkaro(arr) {
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1])
        return false;
    }
    return true;
}

const arr1 = [1, 2, 3, 4, 5, 7, 6]
let yo = sortkaro(arr1) 
console.log(yo)

// Time Complexity: O(N)
// Space Complexity: O(1)




// function sayhello(arr){
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i] > arr[i+1]){
//             return false;
//         }
//     }return true
// }
// Time complexity: O(n)
// Space complexity: O(1)












// function sortHai(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j <= arr.length; j++) {
//             if (arr[j] < arr[i]) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }


// const arr1 = [3, 6, 81, 9, 10]
// const ans = sortHai(arr1);

// if (ans) {
//     console.log("Sorted hai")
// } else {
//     console.log("Sorted nhi hai")
// }
// Time Complexity: O(N^2)
// Space Complexity: O(1)



// Second approach

// function isSorted(arr){
//     for(let i = 1 ; i< arr.length;i++){
//         if(arr[i-1] > arr[i]){
//             return false
//         }
//     }
//     return true
// }


// const arr1 = [12,45,54,861,100]
// console.log(isSorted(arr1) ? "true" : "False")

// Time Complexity: O(N)
// Space Complexity: O(1)