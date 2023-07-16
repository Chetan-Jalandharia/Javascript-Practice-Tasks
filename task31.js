location={
    1:"taj_mehal",
    2:"kutub_minar",
    3:"red_fort",
    4:"hawa_mahal",
    5:"golden_temple"
}

location[2]="bombay_picnic_spot";

location[6]="Wagha_border"
location[7]="hardis_world"

// console.table(location)

for(let x in location){
    console.log(location[x]);
}


delete location[5];
delete location[6];

console.log(location)

