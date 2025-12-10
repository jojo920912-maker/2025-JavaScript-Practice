let gender = '男'
let sex = '女'

function school(gender){
  if (gender === '男'){
    console.log('去讀南一中')
  }else if (gender === '女'){
    console.log('去讀南女中')
  }else {
    console.log('性別輸入有誤，請輸入 男 或 女')
  }
}

school(gender)
school(sex)