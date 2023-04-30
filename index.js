import { Calculator } from './js/classes.js'
import { numberButtons, OperationButton, ActionButton , MainDisplay, SecondDisplay} from './js/elements.js'

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

