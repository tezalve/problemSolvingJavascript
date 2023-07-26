let reverse = (str) => {
    let str2="";
    let len=str.length;
    for(let i=str.length-1; i>=0; i--){
        str2 += str[i];
    }
    console.log("reverse of " + str + " is " + str2);
}

let str1 = "hello world";
let str2 = "dlrow olleh";
let str3 = prompt("What is your sentence?");

reverse(str1);
reverse(str2);
reverse(str3);