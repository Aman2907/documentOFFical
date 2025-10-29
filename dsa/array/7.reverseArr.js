
// using builtin methods

// O(n)
// 0(1)

// let arr1 = [1,5,8,3,6]
// // let v = arr1.reverse()
// let x = [...arr1].reverse()
// console.log(`The original array ${arr1}`)
// console.log(x)



function reverseing(arr){
  let s = 0;
  let e = arr.length - 1

  while(s<e){
    let xeo = arr[s];
    arr[s] = arr[e];
    arr[e] = xeo;
    s++;
    e--;
  }
  return arr
}
// O(n)
// 0(1)

let arr1 = [1,5,8,3,6]
let arr2 = reverseing([...arr1])
console.log(arr2)




let str = "hello";
let reversedStr = str.split('').reverse().join('');
console.log(reversedStr); // Output: "olleh"