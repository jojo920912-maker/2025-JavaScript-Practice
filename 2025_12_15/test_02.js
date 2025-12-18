target = 1000000
saveMoney = 100

const account = (savingsAccount) => {
    let money = savingsAccount

    for(let days = 0 ; ; days++){
        if(money >= target){
            return days
        }
        money += saveMoney
    }
}

console.log(account(30000))