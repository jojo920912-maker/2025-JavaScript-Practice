let grade = 60

const classmates = [
    {name:'Joe' , phone:'0978789860' , city:'高雄市' , scores:80},
    {name:'Han' , phone:'0964513219' , city:'台南市' , scores:40},
    {name:'Tony' , phone:'0933432567' , city:'高雄市' , scores:50},
    {name:'Chris' , phone:'0977877587' , city:'屏東市' , scores:70}
]

for (let i = 0 ; i < 4 ; i++){
    if(classmates[i].scores < grade){
    console.log('不及格'+ classmates[i].name)
    }
}

for (let i = 0 ; i < 4 ; i++){
    if(classmates[i].city === '高雄市'){
    console.log('住高雄市'+classmates[i].name)
    }
}