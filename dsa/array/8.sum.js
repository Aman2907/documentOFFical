


function SumArr(arr){
 arr.sort((a,b) => a - b)
 return arr[arr.length - 2]
}

const arr1 = [1,42,56,91,12]
const arr2 = [54,6,14,81,73]

console.log("The largest number is " + SumArr(arr1))

 