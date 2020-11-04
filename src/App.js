import React, { useState } from 'react';
import style from './App.module.css';
import Navbar from './AppBody/Navbar';
import CalculatorBody from './AppBody/CalculatorBody'


const App = (props) => {

  
  const [menu, menuSelector] = useState('')
  const [meme, memeToggle] = useState(false)

  


  return (
    <div className={style.appWrapper}>
      <Navbar menuSelector={menuSelector} memeToggle={memeToggle} meme={meme}/>
      <CalculatorBody menu={menu} meme={meme}/>

      </div>

  );
}

export default App;
