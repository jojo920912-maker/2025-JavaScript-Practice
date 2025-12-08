let themonth = 12

function getSeason(month){
  if (month >= 1 && month <= 3){
    return ("春天")
  }else if(month >= 4 && month <= 6){
    return ("夏天")
  }else if(month >= 7 && month <= 9){
    return ("秋天")
  }else if(month >= 10 && month <= 12){
    return ("冬天")
  }else {
    return ("無效月份")
  }
}

let season = getSeason(themonth)
console.log(`當前月份 ${themonth} 月，季節是：${season}`)
console.log(`3 月是：${getSeason(3)}`)
console.log(`6 月是：${getSeason(6)}`)
console.log(`8 月是：${getSeason(8)}`)
console.log(`11 月是：${getSeason(11)}`)
