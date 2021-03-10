
// You should implement your task here.
const arr = [[1, 2, 3], 
             [4, 5, 6],
             [7, 8, 9],];

function towelSort(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? towelSort(val, d - 1) : val), [])
                : arr.slice();
};

console.log(towelSort(arr));