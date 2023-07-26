let sameastarget = (arr, target) => {
    let elements="";
    for (let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] == target){
                elements[0]=i;
                elements[1]=j;
                console.log(`target => ${target}, indices = [${i},${j}] => ${arr[i]} + ${arr[j]} = ${arr[i] + arr[j]}`);
                break;
            }
        }
    }
}

let arr1 = [1, 3, 6, 8, 11, 15]
let target1 = 9

let arr2 = [99, 15, 3459, 34, 70, 21, 1, 85, 64, 30, 79]
let target2 = 100

sameastarget(arr1, target1);
sameastarget(arr2, target2);