//----------CALCULATOR-----------------\\
let screen = document.querySelector("#screen")
let buttons = document.querySelectorAll("button")
let operators = document.querySelectorAll("operators")
let num1 = ''
let num2 = ''
let operator = ""
let inputtingFirstNumber = true

let add = function(a, b) {
    result = a + b 
    displayResult(result)
}
let subtract = function(a, b) {
    result = a - b 
    displayResult(result)
}
let multiply = function(a, b) {
    result = a * b 
    displayResult(result)
}
let divide = function(a, b) {
    let result = a / b 
    displayResult(result)
}

buttons.forEach(button => {
    button.addEventListener("click", () =>  {
        if (button.classList.contains("number")) {
            if (inputtingFirstNumber) {
                num1 += button.textContent
                screen.textContent = num1
            }
            else {
                num2 +=button.textContent
                screen.textContent = num2
                }
            }
        
            else if (button.classList.contains("operator")) {
                if (num1) {
                    operator = button.textContent;
                    screen.textContent = operator;
                    inputtingFirstNumber = false;
                }}
        if (button.id ==="equals") {
            operate(operator, num1, num2)
        }
        else if (button.id ==="AC") {
            clearAll()
        }
    })})

const operate = function(operator, num1, num2) {
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)
    if (operator === "+") {
        add(num1, num2)
    }
    else if (operator === "-") {
        subtract(num1, num2)
    } 
    else if (operator === "÷") {
        divide(num1, num2)
    } 
    else {
        multiply(num1, num2)
    } 
}
const clearAll = function() {
            num1 = ''
            num2 = ''
            operator = ''
            screen.textContent = ''
            inputtingFirstNumber = true
        }

const displayResult = function() {
            num1 = ''
            num2 = ''
            operator = ''
            screen.textContent = result
            inputtingFirstNumber = true
}
//----------CALCULATOR-----------------\\


//----------TIME------------------\\
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();