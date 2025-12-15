let grade = 80
grade = 70
grade = 60
grade = 50

function classroom(score){
  switch(score){
    case 80:
      console.log('A+')
      return
    case 70:
      console.log('B+')
      return
    case 60:
      console.log('C+')
      return
    default:
      console.log('D+')
      return
  }
}

classroom(grade)
