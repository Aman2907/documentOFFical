


// function greet(){
//     console.log(this.name)
// }

// greet.call({name:"Aman"})


// function greet(name, age){
//     console.log(`This is ${name} and ${age}`)
// }

// greet.call(this,'Aman', 21)

// function greet(name, age){
//     return name +age
// }
// greet.apply(this,[["Aman",21]])





// function timer(){
//     console.log("Hello AMan")
// }
// setTimeout(timer,2000)


// function sayhello(){
//     console.log("Aman Is boss")
// }

// setInterval(sayhello,2000)


// function kkr(){
//     let aman = "Aman";
//     function singh(){
//         console.log(aman)
//     }
//     return singh
// }

// const counter = kkr()
// counter()


// let student = {
//     Name:"Aman",
//     Company:"IBM"
// }
// console.log(student)
// let x = student;
// console.log(x)
// x.Name = "Sunil";
// console.log(x)


// deep copy
let student = {
    Name:"Aman",
    Company:"IBM"
}

let xam = JSON.parse(JSON.stringify(student))
xam.Name = "ROhit"

console.log(xam.Name)
console.log(xam)
