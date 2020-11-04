import React from 'react';
import style from './Navbar.module.css';
import SimpleCalculator from './SimpleCalculator/SimpleCalculator';


const Navbar = (props) => {
    
    

    return (
        <div className={style.navbar}>
        <div className={style.navbarHeader} >
          Navbar Header
        </div>
        <div className={style.navbarEl} onClick={() => {props.menuToggle('menu1')}}>
          SimpleCalculator
        </div>
        <div className={style.navbarEl} onClick={() => {props.menuToggle('menu2')}}>
          Menu2
        </div>
        <div className={style.navbarEl} onClick={() => {props.menuToggle('menu3')}}>
          Menu3
        </div>
        <div className={style.navbarMeme} onClick={() => {props.menuToggle('meme')}}>
          MeMe
        </div>
      </div>
    )
}

export default Navbar