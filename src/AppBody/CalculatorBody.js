import React, { useState } from 'react';
import SimpleCalculator from './SimpleCalculator/SimpleCalculator.js'


const CalculatorBody = (props) => {

  const [menu, setMenu] = useState('menu1')
  
  return (
     (menu ==='menu1')? <SimpleCalculator setMenu={setMenu}/> : null 
    )
}

  export default CalculatorBody