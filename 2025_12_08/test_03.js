let oddSum = 0
let evenSum = 0

for(let i = 1; i < 101; i++){
  if ( i % 2 === 0){
    oddSum = oddSum + i
  } else{
    evenSum = evenSum + i
  }
}

console.log(oddSum)
console.log(evenSum)