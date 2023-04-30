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
      this.updateMainDisplay("first")

      //We set the default working operand to first
      this.WORKING_OPERAND = "first";
    }


    /**
     * Updates the working operand to either first or second.
     * @param {String} operand Value must be either "first" or "second". 
     */
    setWorkingOperand(operand){
      this.WORKING_OPERAND = operand; 
    }
    
    /**
     * Method to clear the calculator object's operands and operation.
     */
     clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        this.OperationIsSelected = false
        this.setWorkingOperand("first");
        this.updateMainDisplay(this.WORKING_OPERAND)
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
     * Method to append a number to the second operand.
     * @param {Number} number Number to append to the second operand.
     * @returns nothing
     * @todo Add a check to see if the number is a decimal and if the second operand already contains a decimal.
     * If it does, then do not append the decimal.
     *
     */

    appendSecondNumber(number){
      if (number === '.' && this.previousOperand.includes('.')) return
        this.previousOperand = this.previousOperand.toString() + number.toString()
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
     * Method to swap the working operand to the second operand.
     * This is used when the user has selected an operation and is now inputting the second operand.
     * This method also updates the display to show the second operand.
    */
    swapToSecondOperand(){
      this.setWorkingOperand("second");
      this.updateMainDisplay(this.WORKING_OPERAND);
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
   * Method to display the result of a calculation.
   */
  updateDisplayToShowAnswer(){
    MainDisplay.innerText = this.Ans;
  }

  reset(){
    this.currentOperand = this.Ans
    this.previousOperand = ''
    this.operation = undefined
    this.OperationIsSelected = false
    this.setWorkingOperand("first");
  }


    
    /**
     * Alters the html element innertext to objects current first operand
     * @param {String} operandMode This is to determine which operand to update the value displayed on the calculator.
     */
    updateMainDisplay(operandMode){
      if (operandMode == "first"){
        if (this.currentOperand == '') {
          MainDisplay.innerText = '0'
        }else{
          MainDisplay.innerText = this.currentOperand
        }
      }else if (operandMode == "second"){
        if (this.previousOperand == '') {
          MainDisplay.innerText = '0'
        } else {
          MainDisplay.innerText = this.previousOperand
        }
        
      }

      SecondDisplay.innerText = "Operation: "+ this.operation;
      
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
          //If we have a value stored. We set value of ans on calculation.
          if (this.Ans != undefined){
            //Set the value of our operand to ans.
              this.currentOperand = this.Ans
	            this.updateMainDisplay(this.WORKING_OPERAND);
	            console.log("Ans was pressed and value of ans is: "+ this.ans)
          }else{
	            console.log("We have no ans value")
	        }
          break;
        case "DEL":
          
          break;
        case "=":
          //If we have an operation selected and both operands are not empty
          if (this.OperationIsSelected == true && this.currentOperand != '' && this.previousOperand != ''){
            //We do the operation
            var result = this.doOperation(this.operation, parseFloat(this.currentOperand), parseFloat(this.previousOperand))
            //We set ans to the result
            this.ans = result
            //we display the result.
            this.updateDisplayToShowAnswer();
            //We clear the operands and operation. When we reset, we load the value of ans into first operand.
            this.reset()
          }
          break;
        default:
          break;
      }
    }
    
}
