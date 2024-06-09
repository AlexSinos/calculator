//----------CALCULATOR-----------------\\
let display = document.querySelector("#display")
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
                display.textContent = num1
            }
            else {
                num2 +=button.textContent
                display.textContent = num2
                }
            }
        
            else if (button.classList.contains("operator")) {
                if (num1) {
                    operator = button.textContent;
                    display.textContent = operator;
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
            display.textContent = ''
            inputtingFirstNumber = true
        }

const displayResult = function() {
            num1 = ''
            num2 = ''
            operator = ''
            display.textContent = result
            inputtingFirstNumber = true
}
//----------CALCULATOR-----------------\\


//----------TIME------------------\\
const updateTime = () => {
        const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const timeElement = document.getElementById("time");
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
};

setInterval(updateTime, 1000);