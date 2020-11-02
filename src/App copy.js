import React, {useState } from 'react';
import style from './App.module.css';


const App = (props) => {

const [number, setNumberAreaState] = useState('')

  const addNumberArea = (event) => {
    let newsymbol = event.target.value
    setNumberAreaState(number + newsymbol)
  }

  const calculateResult = () => {
    if (number.includes('.')===true) {
      return setNumberAreaState(eval(number).toFixed(2))
    }
    else 
    setNumberAreaState(eval(number))
  }

  const clearNumberArea = () => {
    setNumberAreaState('')
  }


  return (
    <div className={style.appWrapper}>
      <div className={style.numberArea} >
        <textarea id='numberArea' value={number}>0</textarea>
      </div>
      <div className={style.operands} >
        <button onClick={addNumberArea} value='+' id='but+'>+</button>
        <button onClick={addNumberArea} value='-' id='but*'>-</button>
        <button onClick={addNumberArea} value='*' id='but*'>*</button>
        <button onClick={addNumberArea} value='/' id='but/'>/</button>
        <button onClick={addNumberArea} value='**' id='but/'>^</button>
        <button onClick={calculateResult} value='=' id='but='>=</button>
      </div>
      <div className={style.numbers} >
          <button onClick={addNumberArea} value='1' id='but1'>1</button>
          <button onClick={addNumberArea} value='2' id='but2'>2</button>
          <button onClick={addNumberArea} value='3' id='but3'>3</button>
        
          <button onClick={addNumberArea} value='4' id='but4'>4</button>
          <button onClick={addNumberArea} value='5' id='but5'>5</button>
          <button onClick={addNumberArea} value='6' id='but6'>6</button>
        
          <button onClick={addNumberArea} value='7' id='but7'>7</button>
          <button onClick={addNumberArea} value='8' id='but8'>8</button>
          <button onClick={addNumberArea} value='9' id='but9'>9</button>
        
          <button onClick={addNumberArea} value='.' id='but.'>.</button>
          <button onClick={addNumberArea} value='0' id='but0'>0</button>
          <button onClick={clearNumberArea} value='' id='butClear'>AC</button>
        </div>
      </div>
   
  );
}

export default App;
