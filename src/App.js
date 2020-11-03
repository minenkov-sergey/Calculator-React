import React, { useState } from 'react';
import style from './App.module.css';


const App = (props) => {

const [numberArea, setNumberArea] = useState('')
const [firstArg, setFirstArg] = useState('')
const [secondArg, setSecondArg] = useState('')
const [operator, setOperator] = useState('')
const [history, setHistory] = useState([])


  const addNumberArea = (event) => {
    let newsymbol = event.target.value
    if (newsymbol === '+' || newsymbol === '-' || newsymbol === '*' || newsymbol === '/' || newsymbol === '^') {
      if (newsymbol === operator) {
        calculateResult()
      } else {
        return (
        setNumberArea(numberArea + newsymbol),
        setOperator(newsymbol)
      )}
      
    }
    if (operator) {
      return (
        setNumberArea(numberArea + newsymbol),
        setSecondArg(secondArg + newsymbol)
      )
    }

    setNumberArea(numberArea + newsymbol)
    setFirstArg(firstArg + newsymbol)
  }


  const calculate = () => {
    let result = null;
    switch(operator) {
      case ('+') :
        result = +firstArg + +secondArg;
        break
      case ('-') :
        result = +firstArg - +secondArg;
        break
      case ('*') :
        result = +firstArg * +secondArg;
        break
      case ('/') :
        result = +firstArg / +secondArg;
        break
      case ('^') :
        result = Math.pow(firstArg, secondArg);
        break
      default:
        alert ('Оператор отсутствует')
        result = firstArg
    }
    if (Math.round(result) === result) {
      return result
    } else {
      return Number(result.toFixed(8))
    }
    
  }


  const calculateResult = async() => {
    let newResult = await calculate()
    setFirstArg(newResult)
    setSecondArg('')
    setOperator('')
    if (secondArg) {setHistory([`${firstArg} ${operator} ${secondArg} = ${newResult}`, ...history ])}
    setNumberArea(newResult)
  }

  const clearNumberArea = () => {
    setNumberArea('')
    setFirstArg('')
    setSecondArg('')
    setOperator('')
  }

  const clickHistory = (event) => {
    let historyExpression = event.target.textContent
    console.log (historyExpression)
    let equalityIndex = historyExpression.indexOf('=')
    let historyResult = Number(historyExpression.substring(equalityIndex + 2 , historyExpression.length - 1 ))
    setFirstArg(historyResult)
    setSecondArg('')
    setOperator('')
    setNumberArea(historyResult)
  }


  return (
    <div className={style.appWrapper}>
      <div className={style.navbar}>
        <div className={style.navbarHeader}>
        Navbar Header
        </div>
        <div className={style.navbarEl}>
        Menu1
        </div>
        <div className={style.navbarEl}>
        Menu2
        </div>
        <div className={style.navbarEl}>
        Menu3
        </div>
      </div>
      <div className={style.calculator}>
      <div className={style.numberArea} >
        <textarea  id='numberArea' value={numberArea}>0</textarea>
      </div>
      <div className={style.operands} >
        <button onClick={addNumberArea} value='+' id='but+'>+</button>
        <button onClick={addNumberArea} value='-' id='but*'>-</button>
        <button onClick={addNumberArea} value='*' id='but*'>*</button>
        <button onClick={addNumberArea} value='/' id='but/'>/</button>
        <button onClick={addNumberArea} value='^' id='but^'>^</button>
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
        <div className={style.history}> 
          <div className={style.historyHeader}>History of Calculations</div>
            {history.map( c => <div className={style.historyEl} onClick={clickHistory} value={c}> {c} </div> ) }
        </div>
        </div>
      </div>
   
  );
}

export default App;
