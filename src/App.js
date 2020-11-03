import React, { useState } from 'react';
import style from './App.module.css';
import Button  from '@material-ui/core/Button'


const App = (props) => {

const [numberArea, setNumberArea] = useState('')
const [firstArg, setFirstArg] = useState('')
const [secondArg, setSecondArg] = useState('')
const [operator, setOperator] = useState('')
const [history, setHistory] = useState([])


  const addNumberArea = (event) => {
    let newsymbol = event.currentTarget.name
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
    if (secondArg) {setHistory([...history, `${firstArg} ${operator} ${secondArg} = ${newResult}`])}
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
      <div className={style.numberArea} >
        <textarea  id='numberArea' value={numberArea}>0</textarea>
      </div>
      <div className={style.operands} >
        <Button variant='contained' color='primary' onClick={addNumberArea} name='+' id='but+'>+</Button>
        <Button variant='contained' color='primary' onClick={addNumberArea} name='-' id='but*'>-</Button>
        <Button variant='contained' color='primary' onClick={addNumberArea} name='*' id='but*'>*</Button>
        <Button variant='contained' color='primary' onClick={addNumberArea} name='/' id='but/'>/</Button>
        <Button variant='contained' color='primary' onClick={addNumberArea} name='^' id='but/'>^</Button>
        <Button variant='contained' color='primary' onClick={calculateResult} name='=' id='but='>=</Button>
      </div>
      <div className={style.numbers} >
          <Button variant='contained' color='primary' onClick={addNumberArea} name='1' id='but1'>1</Button>
          <Button variant='contained' color='primary' onClick={addNumberArea} name='2' id='but2'>2</Button>
          <Button variant='contained' color='primary' onClick={addNumberArea} name='3' id='but3'>3</Button>
        
          <Button variant='contained' color='primary' onClick={addNumberArea} name='4' id='but4'>4</Button>
          <Button variant='contained' color='primary' onClick={addNumberArea} name='5' id='but5'>5</Button>
          <Button variant='contained' color='primary' onClick={addNumberArea} name='6' id='but6'>6</Button>
        
          <Button variant='contained' color='primary' onClick={addNumberArea} name='7' id='but7'>7</Button>
          <Button variant='contained' color='primary' onClick={addNumberArea} name='8' id='but8'>8</Button>
          <Button variant='contained' color='primary' onClick={addNumberArea} name='9' id='but9'>9</Button>
        
          <Button variant='contained' color='primary' onClick={addNumberArea} name='.' id='but.'>.</Button>
          <Button variant='contained' color='primary' onClick={addNumberArea} name='0' id='but0'>0</Button>
          <Button variant='contained' color='primary' onClick={clearNumberArea} name='' id='butClear'>AC</Button>
        </div>
        <div className={style.history}> 
          <div className={style.historyHeader}>History of Calculations</div>
            {history.map( c => <div className={style.historyEl} onClick={clickHistory} value={c}> {c} </div> ) }
        </div>
      </div>
   
  );
}

export default App;
