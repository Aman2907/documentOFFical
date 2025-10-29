// function sayhello(name, place){
//     this.name = name;
//     this.place = place;
// }
// let sayhello = (name, place) =>{
//     this.name = name;
//     this.place = place;
// }
// let x =  sayhello("Aman", "Kolkata")
// console.log(x)



// prototype based inheritance
// function auroplace(name){
//     this.name = name
// }
// auroplace.prototype.flying = function(){
//     console.log(`This is to inform that name is ${this.name}`)
// }
// const x = new auroplace("Jet Airways")
// x.flying()

callback
function sayhello(name,callback){
    console.log(`Hello my name is ${name}`)
    callback()
}

function saykaro(){
    console.log("my left arm")
}

sayhello("Aman", saykaro)