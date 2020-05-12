const nicoInfo = { /* OBject */
    name:"Nicolas",
    age:33,
    gender:"Male",
    isHansome:true,
    favMovies: ["Along the gods", "LOTR","Oldboy"], /* Object 안에 있는 Array */
    favFood: [ /* Object 안에 있는 Array */
        {
        name:"Kimchi", 
        fatty:false
        }, 
        {
        name:"Cheese burger", 
        fatty:true
        }
        ]
    }

console.log(nicoInfo.gender);

nicoInfo.gender = "Female"

console.log(nicoInfo.favFood[1].name);


/* (,)콤마, String 앞에 "" 붙이는거 잊지 않기! */
/* console 도 Object but, 더 큰 범위의 Object 임.
log는 함수, console 이라는 Object 안에 포함됨. */