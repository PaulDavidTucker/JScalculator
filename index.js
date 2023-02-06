var numberButtons = document.querySelectorAll(".NumberButton")
var OperationButton = document.querySelectorAll(".OperationButton")
var ActionButton = document.querySelectorAll(".ActionButton")
var MainDisplay = document.getElementById("NumberDisplay")
var SecondDisplay = document.getElementById("SecondDisplay")

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.OperationIsSelected = false
      this.Ans= undefined
      this.clear()
    }

    calculate(operation, ){
        alert("Button clicked")
    }
    
     clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        this.OperationIsSelected = false
        this.updateMainDisplay()
        this.updateSecondDisplay()
    }

    appendFirstNumber(number){
      if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
      
    }

    changeOperation(operationGiven){
      if (this.OperationIsSelected == false) {
        this.operation = operationGiven
        this.OperationIsSelected = true
      }
        
      
    }

    updateMainDisplay(){
      if (this.currentOperand == '') {
        MainDisplay.innerText = '0'
      }else{
        MainDisplay.innerText = this.currentOperand
      }
    }

    //In AC/clear method set the operation to undefined
    updateSecondDisplay(){
      SecondDisplay.innerText = "Operation: "+ this.operation
    }
    
    DoSelectedAction(action){
      switch (action) {
        case "AC":
          this.clear()
          break;
        case "ANS":
          //If we have a value stored
          if (this.Ans != undefined){
            //Set the value of our operand to ans.
            this.currentOperand = this.Ans
          }
          break;
        case "DEL":
          
          break;
        case "=":
          //Need to set the value on the second display to ANS = value to make it seem realistic
          break;
        default:
          break;
      }
    }
    
}

//New calculator object to operate on
var calculator = new Calculator(0, 0)


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (calculator.OperationIsSelected) {
        //Start inputting the second operand
      } else {
        calculator.appendFirstNumber(button.innerText)
      }
      //Updates display
      calculator.updateMainDisplay()
    })
  })


  //For every operation + / - * 
  OperationButton.forEach(button => {
    //Add a listener
    button.addEventListener('click', () => {
      calculator.changeOperation(button.innerText)
      calculator.updateSecondDisplay()
    })
  })


  //For every action button 
  ActionButton.forEach(button => {
    //Add listener
    button.addEventListener('click', () => {
      calculator.DoSelectedAction(button.innerHTML)
    })
  })

