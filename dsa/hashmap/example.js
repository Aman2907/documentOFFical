

// counting maximum number of 1

function maxNum(arr){
    let maxi = 0;
    let count  = 0;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]==1){
            count++;
        }else{
            count =0
        }
        maxi = Math.max(maxi,count)
    }
    return maxi
}
o(n)





let nums = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1];
let x = maxNum(nums)

console.log(x)