import React, { useState} from 'react';
import style from './SimpleCalculator.module.css';


const SimpleCalculator = (props) => {

  const [numberArea, setNumberArea] = useState('')
  const [firstArg, setFirstArg] = useState('')
  const [secondArg, setSecondArg] = useState('')
  const [operator, setOperator] = useState('')
  const [history, setHistory] = useState([])


  const addNumberArea = (event) => {
    let newsymbol = event.target.value
    if (newsymbol === '+' || newsymbol === '-' || newsymbol === '*' || newsymbol === '/' || newsymbol === '^' || newsymbol === '\u221A' || newsymbol === 'Log' || newsymbol === '%') {
      if (newsymbol === operator) {
        calculateResult()
      } else {
        return (
          setNumberArea(numberArea + newsymbol),
          setOperator(newsymbol)
        )
      }
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
    switch (operator) {
      case ('+'):
        result = +firstArg + +secondArg;
        break
      case ('-'):
        result = +firstArg - +secondArg;
        break
      case ('*'):
        result = +firstArg * +secondArg;
        break
      case ('/'):
        result = +firstArg / +secondArg;
        break
      case ('^'):
        result = Math.pow(firstArg, secondArg);
        break
      case ('\u221A'):
        result = firstArg? Math.sqrt(firstArg) : Math.sqrt(secondArg);
        break
      case ('Log'):
        result = firstArg? Math.log(firstArg) : Math.log(secondArg);
        break
      case ('%'):
        result = firstArg * (secondArg/100);
        break
      default:
        alert('Оператор отсутствует')
        result = firstArg
    }
    if (Math.round(result) === result) {
      return result
    } else {
      return Number(result.toFixed(8))
    }
  }

  const calculateResult = async () => {
    if (firstArg ==='.1235789.') {
      props.sapperToggle(true)
      return
    }
    let newResult = await calculate()
    if (newResult !== 0) {
      setFirstArg(newResult)
    } else setFirstArg('')
    setSecondArg('')
    setOperator('')
    if (operator) { setHistory([`${firstArg} ${operator} ${secondArg} = ${newResult}`, ...history]) }
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
    let equalityIndex = historyExpression.indexOf('=')
    let historyResult = Number(historyExpression.substring(equalityIndex + 2, historyExpression.length - 1))
    setFirstArg(historyResult)
    setSecondArg('')
    setOperator('')
    setNumberArea(historyResult)
  }

  return (
    <div className={style.calculator}>
        <div className={style.numberArea} >
          <textarea id='numberArea' value={numberArea}></textarea>
        </div>
        {/* delete div below */}
        <div><button onClick={() => {props.sapperToggle(true)}}>Fun</button></div>
        <div className={style.buttons}>
          <button  onClick={addNumberArea} value='^' id='but^'>{'\u005E'}</button>
          <button onClick={addNumberArea} value={'\u221A'} id='butSq'>{'\u221A'}</button>
          <button onClick={addNumberArea} value='Log' id='butLog'>log</button>
          <button onClick={addNumberArea} value='%' id='but%'>{'\u0025'}</button>
          <button onClick={addNumberArea} value={Math.trunc(Math.random()*10)} id='butRand'>R</button>

          <button className={style.num} onClick={addNumberArea} value='1' id='num'>1</button>
          <button className={style.num} onClick={addNumberArea} value='2' id='num'>2</button>
          <button className={style.num} onClick={addNumberArea} value='3' id='num'>3</button>
          <button onClick={addNumberArea} value='+' id='but+'>{'\u002B'}</button>
          <button onClick={addNumberArea} value={Math.PI} id='butP'>{'\u03C0'}</button>

          <button className={style.num} onClick={addNumberArea} value='4' id='num'>4</button>
          <button className={style.num} onClick={addNumberArea} value='5' id='num'>5</button>
          <button className={style.num} onClick={addNumberArea} value='6' id='num'>6</button>
          <button onClick={addNumberArea} value='-' id='but-'>{'\u2212'}</button>
          <button onClick={addNumberArea} value={Math.E} id='butE'>{'\u0065'}</button>

          <button className={style.num} onClick={addNumberArea} value='7' id='num'>7</button>
          <button className={style.num} onClick={addNumberArea} value='8' id='num'>8</button>
          <button className={style.num} onClick={addNumberArea} value='9' id='num'>9</button>
          <button onClick={addNumberArea} value='*' id='but*'>{'\u2217'}</button>
          <button onClick={calculateResult} value='=' id='but='>=</button>

          <button onClick={addNumberArea} value='.' id='but.'>.</button>
          <button className={style.num} onClick={addNumberArea} value='0' id='num'>0</button>
          <button onClick={clearNumberArea} value='' id='butClear'>AC</button>
          <button onClick={addNumberArea} value='/' id='but/'>{'\u00F7'}</button>
          <button onClick={calculateResult} value='=' id='but='>=</button>
        </div>
        <div className={style.history}>
          <div className={style.historyHeader}>History of Calculations</div>
          {history.map( (c, i) => <div key={i} className={style.historyEl} onClick={clickHistory} value={c}> {c} </div>)}
        </div>
      </div>
  )

  }

  export default SimpleCalculator