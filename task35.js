let food_item={}

// food_item["p"]='pizza';
// food_item["r"]='rice';
// food_item["b"]='burger';
// food_item["r"]='roti';
// food_item["p"]='pizza';
let add=(f,p)=>{
    food_item[f]=p;
    console.log('price of '+f+' is '+p);
}

add("pizza",'120');
add("burger",'50');
add("fries",'40');
add("juice",'20');


console.log(food_item)

