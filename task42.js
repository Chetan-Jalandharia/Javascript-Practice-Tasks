i_am_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

i_am_array.forEach(e => {
    console.log(e);
});

let teen_guna = []

i_am_array.forEach(e => {
    teen_guna.push(e * 3);
});

console.log(teen_guna);

console.log(teen_guna.length);

console.log("teen_guna type is : ", typeof (teen_guna));
console.log("i_am_array type is : ", typeof (i_am_array));