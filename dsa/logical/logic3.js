// function sum(a,b, cb){
//     let result = a + b;
//     cb(result)
// }

// function sumof(){
//     console.log("Hello"  )
// }

// sum(12,42,sumof)







// prototype inherit property and methods

// function saykhelo(name, age) {
//     this.name = name;
//     this.age = age;
// }

// function IplPlay(name, owner) {
//     this.name = name;
//     this.owner = owner;
// }

// //object is being created
// let mem1 = new saykhelo("Aman", 12)
// let mem2 = new IplPlay("RCB", "Vijay")

// // add property
// saykhelo.prototype.roll = "21";


// IplPlay.prototype.play = function () {
//     console.log(`This is ${mem2.owner} and I love playing pull shot`)
// }

// console.log(`This is the orgin of ${mem1.name} and age is ${mem1.age}`)
// console.log(`This is IPL 2026 and ${mem2.name} has won the toss and owner is ${this.owner}`)
// mem2.play()
// console.log(`This is Aman and ${mem1.roll}`)



// prototype example
// function NASA(missionName, MemNeed) {
//     this.missionName = missionName;
//     this.MemNeed = MemNeed;
// }
// //new object is being created
// let astonont1 = new NASA("fARISA", "23")

// // add properties of NASA
// NASA.prototype.play = "Cricket"
// console.log(`Hello ${astonont1.missionName} your object is on`)
// console.log(`Hello ${astonont1.MemNeed} your object is on`)


// // ADD METHODS OF FUNCTION
// NASA.prototype.Walking = function () {
//     console.log(`This is aman you are playing the missiona and ${astonont1.play}`)
// }

// astonont1.Walking()





async function promiseFail() {
    try {
        let res = await Promise;
        console.log(res)
    } catch (err) {
        console.log(err)
    }
}


function API() {
    useeffect(() => {
        fetch('')
            .then(res => res.json())
            .then(json => console.log(json))
        })

    return (
        <>
            <div>Hello My name is AMAN SHARMA</div>
        </>
    )
}