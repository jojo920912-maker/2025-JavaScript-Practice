const season = (month) => {
  if(month >= 1 && month <= 3){
    return '春天'
  }else if(month >= 4 && month <=6){
    return '夏天'
  }else if(month >= 7 && month <= 9){
    return '秋天'
  }else if(month >= 10 && month <= 12){
    return '冬天'
  }else{
    return '輸入正確的月份'
  }
}


console.log(season(1))
console.log(season(5))
console.log(season(8))
console.log(season(12))