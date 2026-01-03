let buns = true
let waterMelon = false

function engineer(seeTheWatermelon){
  if (seeTheWatermelon){
    return '下班買十顆包子,看到賣西瓜的，就買一個'
  } else {
    return '因為看到賣西瓜的'
  }
}

console.log(engineer(buns))
console.log(engineer(waterMelon))