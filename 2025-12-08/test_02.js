function getFeeling(mood){
  if (mood === 'happy'){
    return ("真為你開心")
  }else if(mood === 'sad'){
    return ("拍拍，會好起來的")
  }else if(mood === 'angry'){
    return ("別氣，都是對方不好")
  }else {
    return ("雖然我不懂，但我會一直陪著你")
  }
}

console.log(getFeeling("happy"))
console.log(getFeeling("sad"))
console.log(getFeeling("angry"))
console.log(getFeeling("thank"))