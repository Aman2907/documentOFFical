// 1)sum of two numbers
// function sum(a,b){
//     return a+b
// }
// const suming = sum(31,65)
// console.log(suming);



//2 Write a JavaScript program to find the maximum number in an array.
// function findMax(arr) {

//     if (arr.length === 0) {
//         return undefined
//     }
//     var max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max
// }
// const arr1 = [12, 11, 7, 2, 81]
// const sum = findMax(arr1)
// console.log("The maximum number in array is " + sum);

// 3 - palindrome


// call, apply, bind

let callbouning = {
    name:"Aman",
    age:32,
    Designation : "Full Stack",
    userDetails: function(state) {
        console.log(this.name + state + " " + state);
    }
}
// let printDet = function(){
//     console.log(this)
// }

let swting = {
    name: "Sunil",
    age: 23,
    Designation: "Andriod"
}

callbouning.userDetails(" Delhi")
// callbouning.userDetails.call(swting.name)
// callbouning.userDetails.call(swting.name)
// console.log(swting.name);