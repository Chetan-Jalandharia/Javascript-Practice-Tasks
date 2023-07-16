
food={
    "veg":{"w":"wheat",
           "r":"rice",
           "p":"piza"},

    "n_veg":{"ck":"chicken_kabbab",
             "e":"egg"}
}

for (let i in food) {
    for (let f in food[i]) {
        if (f=="r") {
            console.log(food[i][f])
        }
        if (f=="ck") {
            console.log(food[i][f])
        }
    }    
}