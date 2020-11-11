import React, { useState } from 'react';
import style from './CalculatorBody.module.css';
import SimpleCalculator from './SimpleCalculator/SimpleCalculator.js'
import Sapper from './Sapper/Sapper.js'


const CalculatorBody = (props) => {

  const [sapper, sapperToggle] = useState(false)
  
  return (
    sapper? <Sapper sapper = {sapper} sapperToggle={sapperToggle} /> : <SimpleCalculator sapperToggle={sapperToggle} />
    )
}

  export default CalculatorBody