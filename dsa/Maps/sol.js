
// This will convert data into array
// const place = new Map([["Delhi", 1],["Bombay", 2],["Kolkata",3]])
// let seri = Array.from(place)
// let out = JSON.stringify(seri)
// console.log(out)

// This will convert data into object

// let conv = Object.fromEntries(place)
// let out = JSON.stringify(conv)
// console.log(out)


// for(let [key,value] of place){
//     console.log(`${key} pointed to ${value}`)
// }

// place.forEach((value, key)=>{
//     console.log(value,key)
// })
// let key = place.keys()
// console.log(key)



// convert key in one array and values in one array
// let contv = place.keys()
// let uniq = place.values()

// let arr = [];
// let arr2 = [];

// for(let ele of contv){
//     arr.push(ele)
// }
// console.log(arr)

// for(let hoh of uniq){
//     arr2.push(hoh)
// }
// console.log(arr2)


//sorting map
// const place = new Map([["Delhi", 1],["Bombay", 2],["Kolkata",3]])

// let sol = place.has("Delhi")
// console.log(sol)

// let beb = [...place.entries()].sort()
// console.log(beb)

// for(let [key,value] of place){
//     console.log(value)
// }






function sayhello(name,nam){
    console.log(`This value is ${name} and another is ${this.name} and ${nam} `)
}

const name = {
    name: "Aman"
}

// sayhello.apply(name,["Sameer", 12])

let x = sayhello.bind(name)
x("AMan")




