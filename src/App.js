import React from 'react';
import style from './App.module.css';
import CalculatorBody from './AppBody/CalculatorBody'


const App = (props) => {

  return (

    <div className={style.appWrapper}>
      <CalculatorBody />
    </div>

  );
}

export default App;
