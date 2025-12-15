function engineer(backHome){
  if (backHome === 'wife'){
    return '老婆說:下班買10顆回家,如果看到賣西瓜的,就買一個'
  } else if(backHome === 'why'){
    return '诶，怎麼只有買一顆包子'
  }else {
    return '因為看到賣西瓜的'
  }
}

console.log(engineer('wife'))
console.log(engineer('why'))
console.log(engineer('???'))