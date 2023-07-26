let frequentelement = (arr) => {
    let highestcount = 0;
    let element;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] == arr[j])
                count++;
        }
 
        if (count > highestcount) {
            highestcount = count;
            element = arr[i];
        }
    }
    console.log(`most frequent is number ${element} and the frequency is ${highestcount}`);
}

let arr1 = [3, 5, 2, 5, 3, 3, 1, 4, 5];
let arr2 = [1,2,3,4,6,6,7,8,9];
let arr3 = [4,5,6,1,2,3,45,1,2,3,4,5];

frequentelement(arr1);
frequentelement(arr2);
frequentelement(arr3);

