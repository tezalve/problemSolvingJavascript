const secSmall = (arr) => {
    let small = arr[0];
    for(let i=0; i<arr.length; i++){
        if (arr[i] < small){
            small = arr[i];
        }
    }
    
    const arr2 = arr.filter(n => {
       return n != small;
    })

    let secondSmall = arr2[0];
    for(let i=0; i<arr2.length; i++){
        if (arr2[i] < secondSmall){
            secondSmall = arr2[i];
        }
    }
    console.log(`Second Smallest Number is ${secondSmall}`);

}

let arr1 = [-2,-1,2,3,-10,49,12];
let arr2 = [-2,-1,2,3,49,12];
let arr3 = [2,3,49,12];

secSmall(arr1);
secSmall(arr2);
secSmall(arr3);

