const container = document.querySelector(".container")
const display = document.querySelector(".display")

let firstNumber = ""
let secondNumber = ""
let operator = ""
let sum = 0

function clear(){
    firstNumber = ""
    secondNumber = ""
    operator = ""
    sum = 0
}

function getFirstNumber(value) {
    if (operator.length === 0 && Number.isInteger(parseInt(value))) {
        console.log("number pressed: " + value)
        firstNumber += value
        console.log("first number: " + firstNumber)

        
    }
}

function getSecondNumber(value) {
    if ((operator.length > 0 || sum > 0) && Number.isInteger(parseInt(value))) {
        console.log("number pressed: " + value)
        secondNumber += value
        console.log("second number: " + secondNumber)

       
    }
}

function getOperator(value) {
    // ignore equals here; it's handled separately in the listener
    if (value === "=") return

    if (operator.length === 0 && !Number.isInteger(parseInt(value))) {
        operator = value
        console.log("operator " + operator)
    } else if (!Number.isInteger(parseInt(value))) {
        // operator already set: if both numbers present compute sum, otherwise just replace operator
        if (firstNumber.length > 0 && secondNumber.length > 0) {
            sum = operate(parseInt(firstNumber), parseInt(secondNumber), operator)
            console.log("sum = " + sum)
            firstNumber = String(sum)
            secondNumber = ""
            operator = value
        } else {
            operator = value
            console.log("operator replaced: " + operator)
        }
    }
}

container.addEventListener("click", (e) => {
    const value = e.target.textContent

    if (operator.length == 0 && Number.isInteger(parseInt(value))) {
        getFirstNumber(value)
    } else if ((operator.length > 0 || sum > 0) && Number.isInteger(parseInt(value))) {
        getSecondNumber(value)
    } else if (value == "=") {
        sum = (operate(parseInt(firstNumber), parseInt(secondNumber), operator))
        console.log("sum = " + sum)

        firstNumber = sum
        operator = ""
        secondNumber = ""

        if (sum == "Infinity"){
            alert("DON'T EVER TRY THAT AGAIN!")
            clear()
        }

    }

    if (value !== "=" && !Number.isInteger(parseInt(value))) {
        getOperator(value)
    }

    if (value == "clear"){
        clear()
    }

})




function operate(number1, number2, operator){
    switch (operator){
        case "+":
            return number1 + number2
        case "-":
            return number1 - number2          
        case "÷":
            return number1 / number2           
        case "x":
            return number1 * number2
           
    }

}
