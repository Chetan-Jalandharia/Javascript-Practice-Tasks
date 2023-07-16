function add(...a) {
    sum=0;
    for (let i = 0; i < a.length; i++) {
        sum+=a[i];        
    }
    return sum;
}

console.log(add(1,5,4,20,12,8));