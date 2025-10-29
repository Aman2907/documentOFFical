
//Brute force linear search

function missingNumber(arr, numbering) {

  for (let i = 1; i <= numbering; i++) {
    let flag = 0;

    for (let j = 0; j < numbering - 1; j++) {
      if (arr[j] == i) {
        flag = 1;
        break;
      }
    }
    //if no element is present
    if (flag == 0) {
      return i;
    }
  }
}

// TC O(N*2),
// Space Complexity: O(1)


// hashmap 
function missingNumber(array, number) {
  const hash = new Array(number + 1).fill(0)
  for (let i = 0; i < number; i++) {
    hash[array[i]]++;
  }
  for (let j = 1; j < number; j++) {
    if (hash[j] === 0) {
      return j
    }
  }
}
// total time complexity is O(N) + O(N).
// Space Complexity: O(N)


const N = 5
const arr = [1, 3, 4, 5];
const ans = missingNumber(arr, N)

console.log("The missing numbr is " + ans)

