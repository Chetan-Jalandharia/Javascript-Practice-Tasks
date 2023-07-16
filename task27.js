movies=[
        {'name':'sholay','hero':'dharmander','year':1975},
        {'name':'pratigya','hero':'dharmander','year':1975},
        {'name':'pushpa','hero':'alu_arjun','year':2021},
        {'name':'kgf2','hero':'rocky','year':2022},
        {'name':'bramhastra','hero':'ranveer','year':2022},
        {'name':'shershah','hero':'sidharth','year':2021},
        {'name':'rrr','hero':'ramcharan','year':2021},
        {'name':'anek','hero':'ayuskman','year':2022}
       ]

       for (let i = 0; i < movies.length; i++) {
            for(let m in movies[i]){
                console.log(m+'-'+movies[i][m])
            }
       }
       
