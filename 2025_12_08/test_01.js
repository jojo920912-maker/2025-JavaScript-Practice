let gender = 'male'

function school(gender){
  if (gender === 'male'){
    console.log('去讀南一中')
  } else if (gender === 'female'){
    console.log('去讀南女中')
  } else {
    console.log('性別輸入有誤，請輸入 男 或 女')
  }
}

school(gender)
