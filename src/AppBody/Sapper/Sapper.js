import React, { useState, useEffect } from 'react';
import style from './Sapper.module.css';


const Sapper = (props) => {

  const [history, setHistory] = useState([])

  const [tile, checkTile] = useState([])

  const startGame = () => {
    for (let i = 0; i < 100; i++) {
      let random = Math.random() * 10
      if (random <= 2) {
        checkTile((previousState) => {
          return [...previousState, "b"]
        })

      } else {
        checkTile((previousState) => {
          return [...previousState, "_"]
        })
      }
    }
  }
  useEffect(() => {startGame()}, tile)
  
  return (
    <div className={style.calculator}>
      <div className={style.tiles}>

        {tile.map(t => <button key={tile.length-1}>{t}</button>)}
      </div>
      <div className={style.history}>
        <div className={style.historyHeader}>History of Calculations</div>
        <button onClick={startGame}></button>
        {history.map(c => <div className={style.historyEl} onClick={''} value={c}> {c} </div>)}
      </div>
    </div>

  )
}

export default Sapper