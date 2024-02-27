// create prompt to request order from customer
const froyoOrder = prompt("please enter your froyo Order. Seperate each order with a comma!")
//Takes the string and we split it into an array
const froyoArray=froyoOrder.split(",")


const froyoObject = {}

// loop through the array of orders given by customer


console.log(froyoFunction)

function froyoFunction () {
    

    for(let i=0; i<froyoArray.length; i++){

        if(froyoObject[froyoArray[i]]){
        froyoObject[froyoArray[i]] = froyoObject[froyoArray[i]]+1
        }
        else{
            froyoObject[froyoArray[i]] = 1
        }
    }
    return froyoObject
}

console.table(froyoFunction())

  