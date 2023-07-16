let myarr=[...Array(20).keys()];

myarr.forEach(x => {
    console.log(x);
});

let chotu_array= myarr.filter(o =>o%2!=0);

console.log(chotu_array);

let chotu_with_string=JSON.stringify(chotu_array);

console.log(chotu_with_string, typeof(chotu_with_string));

let I_am_array=JSON.parse(chotu_with_string);

I_am_array.push(30,50);

console.log(I_am_array);