// maps
// const nums = [1, 2, 3, 4, 5];
// nums.map((num) => {
//     console.log(num * 2 + "FirstLoop")
// })

// nums.map((num) => {
//     console.log(num * 3)
// })



// filter
// const num2 = [1, 2, 3, 4, 5, 7,8,9,10]
// num2.filter((num) => {
//     if(num % 2 ===0){
//         console.log(num + " is Even")
//     }
//     else {
//         console.log(num + " is Odd")
//     }
// })


// reduce
// const nums = [1, 2, 3, 4, 5];
// nums.reduce((acc, num) => {
//     console.log(acc + num + " is the sum so far")
//     return acc + num;
// })

// const num4 = ["Amazon", "Google", "Facebook", "Apple", "Microsoft", "Amazon", "Google"];

// const fruitcount = num4.filter((num) => num === "Google").length;
// console.log("Googge count is : " + fruitcount)



// part 2 javascript stringify and parse and object assign
// const obj = { name: "Aman", age: 25 };
// const str = JSON.stringify(obj)
// console.log(str); // Con
// console.log(typeof str)


// const obj2 = {name :"Bikas", age :31}
// const str2 = JSON.stringify(obj2)
// console.log(str2)


const str = '{"name":"Aman","age":25}';
const obj = JSON.parse(str);
console.log(obj); // Converts
// console.log(typeof obj)//  JSON string back to object

// const obj1 = { a : "Aman"}
// const obj2 = { b : "Sharma"}

// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);
// console.log(typeof obj3) // Merges obj1 and obj2 into a new object


// part 3 Shallow and Deep Copy
const original = {
  name: "Aman",
  address: { city: "Kolkata", pin: 700033 }
};

// const shallowCopy = { ...original}
// console.log(shallowCopy);
// shallowCopy.address.city = "Asansol"
// console.log(original.address.city); // Asansol
// console.log(shallowCopy.address.city); // Asansol


// const deepcopy = JSON.parse(JSON.stringify(original));
// deepcopy.address.city = "Asansol";
// // basically deep copy creates a new object with the same properties as the original object, but it does not share references to nested objects.
// console.log(deepcopy.address.city); // Asansol
// console.log(deepcopy)
// console.log(original)



// part 4 array destructuring
    // const arr = { Name: "Aman Sharma" , age:" 43"}
// const {Name, age}  = arr;
// console.log(Name); // Aman Sharma
// console.log(age); // 43

// const {Name: Fullname, age : Age} = arr
// console.log(Fullname); // Aman Sharma
// console.log(Age); // 43






// part 5 array rest and spread operator


// rest Collects multiple values into a single variable (usually an array or object). pack them in single box
// function sum(...args){
//     return args.reduce((acc, num) => {
//         return acc + num
//     })
// }
// console.log(sum(2, 4, 6, 8 , 10))


// rest operator can also be used in array destructuring to collect the remaining elements into an array
// const arr = ["Apple", "Banana", "Cherry", "Strawberry", "Mango"];

// const [first, second, ...rest] = arr;
// console.log(first); // Apple
// console.log(second); // Banana
// console.log(rest); // [ 'Cherry', 'Strawberry', 'Mango' ]



// spread operator is used to unpack elements from an array or properties from an object. spread operator is used to spread the elements of an array or object into another array or object
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];

// const combine = [...arr1, ...arr2];
// console.log(combine); // [ 1, 2, 3, 4, 5, 6 ]


// part 6
// call , appluy and bind

// function saying(name, age){
//     console.log("Hello " + name + ", you are " + age + " years old.");
// }

// const person ={
//     name :"Aman",
//     age : 25
// }

// saying.call(person, "Hy")