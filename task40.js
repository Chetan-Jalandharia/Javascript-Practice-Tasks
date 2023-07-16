arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3==0) {
        console.log(arr[i]);
    }
}

// delete arr[arr.length-1];
arr.pop();


arr[4]=10;

arr.push(5,8);


for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);    
}

console.log(arr.length);