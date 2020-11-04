import React, { useState } from 'react';
import style from './App.module.css';
import Navbar from './AppBody/Navbar';
import CalculatorBody from './AppBody/CalculatorBody'


const App = (props) => {

  
  const [menu, menuToggle] = useState('')


  


  return (
    <div className={style.appWrapper}>
      <Navbar menuToggle={menuToggle} />
      <CalculatorBody menu={menu}/>

      </div>

  );
}

export default App;
