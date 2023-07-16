songs = [
    
]


songs.push({
    "s_name": "libas",
    "singer": "kaka",
    "language": "punjabi"
}) 
songs.push( {
    "s_name": "dil meri na sune",
    "singer": "atif aslam",
    "language": "hindi"
}
) 
songs.push({
        "s_name": "heat waves",
        "singer": "glass animals",
        "language": "english"
    })

    for (let i = 0; i < songs.length; i++) {
        for(x in songs[i]){
            console.log(x+":"+songs[i][x]);
        }        
    }

    console.log(songs[2]["s_name"]);