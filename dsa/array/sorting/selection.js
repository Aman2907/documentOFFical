



function bubblesort(arr){
    let x = arr.length;
    for(let i=0 ; i<x-i; i++){
      for(let j = 0; j  < x- i - 1;j++){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp 
      }
    }
    return arr;
}

let arr1 = [,-1,-4,-7,13, 6, 5, 2, 9]
let x = bubblesort(arr1)
console.log(x)

