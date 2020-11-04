import React from 'react';
import style from './CalculatorBody.module.css';
import SimpleCalculator from './SimpleCalculator/SimpleCalculator.js'
import Sapper from './Sapper/Sapper.js'


const CalculatorBody = (props) => {
  if(props.meme) {
  switch (props.menu) {
    case ('menu1'):
      return (<Sapper />)
    case ('menu2'):
      return <div>meme 2</div>
    case ('menu3'):
      return <div>meme 3</div>
    default:
      return (<div>meme default</div>)
  }
 } else {
    switch (props.menu) {
      case ('menu1'):
        return (<SimpleCalculator />)
      case ('menu2'):
        return <div>menu2</div>
      case ('menu3'):
        return <div>menu3</div>
      default:
        return (<div>default page</div>)
  }
  }
}

  export default CalculatorBody