let oddSum = 0
let evenSum = 0

for(let i = 1; i < 101; i++){
  if ( i % 2 === 0){
    evenSum = evenSum + i
  } else{
    oddSum = oddSum + i
  }
}

console.log(evenSum)
console.log(oddSum)
