const container = document.querySelector(".container")
const display = document.querySelector(".display")

let firstNumber = ""
let secondNumber = ""
let operator = ""


container.addEventListener("click", (e) => {
    const value = e.target.textContent
    
    if (operator.length == 0 && Number.isInteger(parseInt(value))){
        console.log("number" + value)
        firstNumber += value
        console.log("first number: " + firstNumber)
       
    }

    else if (operator.length > 0 && Number.isInteger(parseInt(value))){
        console.log("number" + value)
        secondNumber += value
        console.log("second number: " + secondNumber)
    
    }

    else if (value == "="){
        console.log(operate(parseInt(firstNumber), parseInt(secondNumber), operator))
    }

    else if (!Number.isInteger(parseInt(value))){
        operator += value
        console.log("operator " + operator)
    }

    

})


function operate(number1, number2, operator){
    switch (operator){
        case "+":
            console.log(number1 + number2)
            break
        case "-":
            console.log(number1 - number2)
            break
        case "÷":
            console.log(number1 / number2)
            break
        case "x":
            console.log(number1 * number2)
            break
    }

}
