import React from 'react';
import style from './Navbar.module.css';


const Navbar = (props) => {
    
    

    return (
        <div className={style.navbar}>
        <div className={style.navbarHeader} >
          Navbar Header
        </div>
        <div className={style.navbarEl} onClick={() => {props.menuSelector('menu1')}}>
          SimpleCalculator
        </div>
        <div className={style.navbarEl} onClick={() => {props.menuSelector('menu2')}}>
          Menu2
        </div>
        <div className={style.navbarEl} onClick={() => {props.menuSelector('menu3')}}>
          Menu3
        </div>
        {props.meme? <button className={style.navbarMemeOn} onClick={() => {props.memeToggle(!props.meme)}}> Memes: On </button>
                    : <button className={style.navbarMemeOff} onClick={() => {props.memeToggle(!props.meme)}}>Memes: Off</button>}
      </div>
    )
}

export default Navbar