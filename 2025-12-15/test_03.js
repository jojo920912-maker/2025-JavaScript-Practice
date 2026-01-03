let arr = []

arr[0] = 'Alice'
arr[1] = 'BOb'
arr[2] = 'Scott'
arr[3] = 'Chloe'
arr[4] = 'Michelle'

console.log(arr)

let student = arr.shift()
console.log(student + '轉學了')

arr.unshift('JoJo')
console.log('JoJo轉進來')
