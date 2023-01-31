var button = document.getElementById('Submit')

button.addEventListener("click", submit)

var numberButtons = document.querySelectorAll("NumberButton")
var FunctionButtons = document.querySelectorAll("FunctionButton")
var ActionButton = document.querySelectorAll("ActionButton")
var display = document.getElementById("NumberDisplay")

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }

    calculate(operation, ){
        alert("Button clicked")
    }
    
     clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    appendNumber(number){
        this.currentOperand = number
    }

    updateDisplay(){
        display.innerText = this.currentOperand
        console.log(thi.currentOperand)
    }
    
    
}

var Calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      Calculator.appendNumber(button.innerText)
      Calculator.updateDisplay()
      console.log(button.innerText)
    })
  })


