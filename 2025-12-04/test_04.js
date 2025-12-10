function word(start, end){
  let all = 0
  for(let i = start ; i <= end ; i++){
    all = all + i
  }
  return all
}

console.log(word(8, 28))
