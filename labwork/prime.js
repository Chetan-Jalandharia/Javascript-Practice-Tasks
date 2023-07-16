let s=3;
let e=2;

for (let i = s; i < e; i++) {
    
    let a=i;
    let prime=true;
    for (let j = 2; j < a; j++) {
       
        if (a%j==0) {
            prime=false;
            break;
        }
    }

    if (prime) {
        console.log(`${a} is a prime number`);
    }
    
}