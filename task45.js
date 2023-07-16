food = {

    "veg": {
        "vegetarian": {
            "r": "rice",
            "m": "milk",
            "h": "honey",
        },
        "vegan": {
            "s": "spinach",
            "p": "peas"
        }
    },

    "non-veg": {
        "non-vegetarien": {
            "ck": "chicken kabab",
            "bck": "butter chicken"
        },
        "eggetarian": {
            "ec": "egg curry",
            "be": "boiled eggs"
        }
    }

}

for (let i in food)
    for (let j in food[i])
        for (let k in food[i][j])
            console.log(food[i][j][k]);
