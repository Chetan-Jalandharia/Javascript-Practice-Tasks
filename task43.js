array_forty=[...Array(40).keys()];

console.log(array_forty);
console.log(array_forty.length);

let chotu_array=[];

array_forty.forEach(e => {
    if (e%3==0) {
        chotu_array.push(e);
    }
});

console.log(chotu_array);
console.log(chotu_array.length);