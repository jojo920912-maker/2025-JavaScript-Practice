function getFeeling(Mood){
  if (Mood === 'happy'){
    return ("真為你開心")
  }else if(Mood === 'sad'){
    return ("拍拍，會好起來的")
  }else if(Mood === 'angry'){
    return ("別氣，都是對方不好")
  }else {
    return ("雖然我不懂，但我會一直陪著你")
  }
}

console.log(getFeeling("happy"))
console.log(getFeeling("sad"))
console.log(getFeeling("angry"))
console.log(getFeeling("thank"))