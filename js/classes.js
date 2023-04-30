import {MainDisplay, SecondDisplay} from '/js/elements.js'

/**
 * Class to represent a calculator object.
 */
export class Calculator {



    constructor(previousOperand, currentOperand) {
      this.previousOperand = previousOperand
      this.currentOperand = currentOperand
      this.OperationIsSelected = false
      this.Ans= undefined
      this.updateMainDisplay()
    }

    
    /**
     * Method to clear the calculator object's operands and operation.
     */
     clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        this.OperationIsSelected = false
        this.updateMainDisplay()
        this.updateSecondDisplay()
    }

    /**
     * Method to append a number to the first operand.
     * @param {Number} number Number to append to the first operand.
    */
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

    /**
     * Alters the html element innertext to objects current operation
    */
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