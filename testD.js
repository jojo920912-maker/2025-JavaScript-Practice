function mockApiCall() {
  // 30% chance to succeed. No need Promise here.
  if (Math.random() < 0.3) {
    return true
  } else {
    return false
  }
}

// Please complete the function to call the mock API with retry logic (up to 3 times)
function callApiWithRetry() {
  const APIRetry = 3

  for(let i = 1 ; i <= APIRetry ;i++){
    if(mockApiCall()){
      return 'API 呼叫成功'
    }else{
      console.log(`呼叫第${i}次,請重新在試`)
    }
  }return ('API呼叫失敗')
}

// Example usage:
console.log(callApiWithRetry()) // Should return the success data or throw an error after 3 failed attempts