import { Calculator } from './js/classes.js'
import { numberButtons, OperationButton, ActionButton , MainDisplay, SecondDisplay} from './js/elements.js'

//New calculator object to operate on
var calculator = new Calculator(0, 0)


// each of these methods assigns an action to all buttons of this type.
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      var WORKING_OPERAND = calculator.WORKING_OPERAND
      if (calculator.OperationIsSelected) {
        calculator.appendSecondNumber(button.innerText)
      } else {
        calculator.appendFirstNumber(button.innerText)
      }
      //Updates display
      calculator.updateMainDisplay(WORKING_OPERAND)
    })
  })


  //For every operation + / - * 
  OperationButton.forEach(button => {
    //Add a listener
    button.addEventListener('click', () => {
      calculator.changeOperation(button.innerText)
      calculator.updateSecondDisplay()
      calculator.swapToSecondOperand();
    })
  })


  //For every action button 
  ActionButton.forEach(button => {
    //Add listener
    button.addEventListener('click', () => {
      calculator.DoSelectedAction(button.innerHTML)
    })
  })

