


// function sortkaro(arr1){
//     let y = arr1.sort((a,b)=> b - a)
//     return {y}
// }
// let arr1 = [1,5,2,8,10,6]
// let x = sortkaro(arr1)
// console.log(x)


// function sortkaro(arr1,k){
//    arr1.sort((a,b) => a - b)
//   return arr1[k - 1]
// }



function sortkaro(array) {
  let i = 0, j;
  while (i < array.length) {
    j = j + 1;
    while (j < array.length) {
      if (array[j] > array[i]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      j++;
    }
    i++;
  }
}


let arr1 = [12, 3, 5, 7, 19]
let k = 2
let x = sortkaro(arr1, k)
console.log(x)