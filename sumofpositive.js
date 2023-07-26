let sumofpositive = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        if (arr[i] > -1){
            sum += arr[i];
        }
    }
    console.log(sum);
}

let arr1 = [2, -5, 10, -3, 7];
let arr2 = [-124, -5, -100, +123, 124];
let arr3 = [0, -1, 2, -3, 4, -5, 6. -7, 8, -9];

sumofpositive(arr1);
sumofpositive(arr2);
sumofpositive(arr3);