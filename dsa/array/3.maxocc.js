

//Maximum occ of number

function maxOcc(arr1, k) {
    var count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] == k) {
            count++;
        }
    }
    return count
}

function countKaro(arr, num) {
    return arr.filter(x => x === num).length;
}

// o(n)
// o(1)

let arr1 = [11, 11, 2, 4, 4, 5, 6, 8, 11, 11]
let k = 11;
let x = maxOcc(arr1, k)
console.log(x)