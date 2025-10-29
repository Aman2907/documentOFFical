let A = [5, 6, 0, 4, 6, 0, 9, 0, 8];
let n = A.length;
let j = 0;

for (let i = 0; i < n; i++) {
    if (A[i] != 0) {
        [A[j], A[i]] = [A[i], A[j]]; // Swap A[j] and A[i]
        j++;
    }
}

for (let i = 0; i < n; i++) {
    console.log(A[i] + " "); // Print the array
}
// put all zero at the end 5, 6, 0, 4, 6, 0, 9, 0, 8

// o (n)