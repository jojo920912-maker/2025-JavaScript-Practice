let firstNumber = 0
let secondNumber = 0

for(let i = 1; i < 101; i++){
  if ( i % firstNumber === 0){
    firstNumber = firstNumber + i
  }else{
    secondNumber = secondNumber +i
  }
}

console.log(firstNumber)
console.log(secondNumber)