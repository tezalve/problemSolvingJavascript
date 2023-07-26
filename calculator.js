let calculate = (a, b, o) => {
    let ans;
    if (o == '+'){
        ans = a + b;
    }
    else if (o == '-'){
        ans = a - b;
    }
    else if (o == '*'){
        ans = a * b;
    }
    else if (o == '/'){
        ans = a / b;
    }
    else{
        console.log('invalid');
    }
    if(ans){
        console.log(`${a} ${o} ${b} = ${ans}`);
    }
}

calculate(2,5,'/');