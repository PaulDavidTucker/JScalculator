var numberButtons = document.querySelectorAll(".NumberButton")
var OperationButton = document.querySelectorAll(".OperationButton")
var ActionButton = document.querySelectorAll(".ActionButton")
var MainDisplay = document.getElementById("NumberDisplay")
var SecondDisplay = document.getElementById("SecondDisplay")

/**
 * Class to represent a calculator object.
 */
class Calculator {



    constructor(previousOperand, currentOperand) {
      this.previousOperand = previousOperand
      this.currentOperand = currentOperand
      this.OperationIsSelected = false
      this.Ans= undefined
      this.updateMainDisplay()
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


    /**
     * Method to update object's operation and display.
     * @param {String} operationGiven 
     */
    changeOperation(operationGiven){
      this.operation = operationGiven
      this.OperationIsSelected = true
      
      this.updateSecondDisplay(operationGiven)
      
    }

    /**
     * Method to do the operation assigned with operands supplied. Returns result of the operation
     * @param {String} operation
     * @param {Number} operand1
     * @param {Number} operand2
     */
    doOperation(operation, operand1, operand2){
      if (this.OperationIsSelected == false){
          //TODO
          //Message to an output (undefined operation)
      }

      var result;

      switch (operation) {
        case "+":
          result = operand1 + operand2
          this.Ans = result
          return result
          break;
        case "-":
          result = operand1 - operand2
          this.Ans = result
          return result
          break;
        case "*":
          result = operand1 * operand2
          this.Ans = result
          return result
          break;
        case "/":
          result = operand1 / operand2
          this.Ans = result
          return result
          break;
        default:
          break;
      }


      //Deselct the operation for next use
      this.OperationIsSelected = false
      //Pass empty operation
      this.changeOperation("")


  }


    
    /**
     * Alters the html element innertext to objects current first operand
     */
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


// each of these methods assigns an action to all buttons of this type.
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

