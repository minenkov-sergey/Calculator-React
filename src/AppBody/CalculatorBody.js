import React from 'react';
import style from './CalculatorBody.module.css';
import SimpleCalculator from './SimpleCalculator/SimpleCalculator'


const CalculatorBody = (props) => {
  switch (props.menu) {
    case ('menu1'):
      return (<SimpleCalculator />)
    case ('menu2'):
      return <div>menu2</div>
    case ('menu3'):
      return <div>menu3</div>
    case ('meme'):
      return <div>meme</div>
    default:
      return (<SimpleCalculator />)
  }
}

  export default CalculatorBody