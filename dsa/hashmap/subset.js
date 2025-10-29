


// function subsetyes(arr1,arr2){
//     let x = arr1.length;
//     let y = arr2.length;
//     console.log(x)
//     let i = 0;
//     let j = 0;

//     for( i = 0; i<y; i++){
//         for(j = 0; j<x; j++)
//             if(arr2[i]==arr1[j])
//             break;
        
//         if(j==x)
//             return false     
//     }return true
// }
// Time Complexity: O(m*n)
// Auxiliary Space: O(1)



function subsetyes(arr1,arr2){
    let x = arr1.length;
    let y = arr2.length;

    let hmap = new Set()

    for(let i = 0;i<x;i++){
        if(!hmap.has(arr1[i]))
        hmap.add(arr1[i])
        }

        for(let  i =0;i<y;i++){
            if(!hmap.has(arr2[i]))
            return false
        }
        return true
}
// Time Complexity: O(m+n*logm)
// Auxiliary Space: O(m)





let  arr1 = [1,5,7,14,7,6,9]
let arr2 = [7,9,1]
let sub = subsetyes(arr1,arr2)
console.log(sub)