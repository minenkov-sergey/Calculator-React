import React, { useState, useEffect } from 'react';
import style from './Sapper.module.css';


const Sapper = (props) => {

  const [history, setHistory] = useState([])

  const [board, setBoard] = useState([])
  const [playerBoard, setPlayerBoard] = useState([])
  const [flags, setFlag] = useState()
  const [bombs, setBombs] = useState()


  let boardCopy = []
  const generateboard = () => {
    setBoard([])
    generateBombs()
    generateHintsOfBombs()
    let emptyArr = generateEmptyArr()
    setPlayerBoard([...emptyArr])
  }

  const generateBombs = () => {
    let bombsCount = 0;
    for (let i = 0; i < 10; i++) {
      let newArr = []
      for (let j = 0; j < 10; j++) {
        let random = Math.random()
        if (random <= 0.1) {
          newArr = [...newArr, 'B']
          bombsCount += 1
        } else {
          newArr = [...newArr, 0]
        }
      }
      boardCopy = [...boardCopy, newArr]
    }
    setBombs(bombsCount)
    setFlag(bombsCount)
  }

  const generateHintsOfBombs = () => {
    console.log(board === playerBoard)
    let newboardCopy = [...boardCopy]
    for (let i = 0; i < newboardCopy.length; i++) {
      for (let j = 0; j < newboardCopy[i].length; j++) {
        if (newboardCopy[i][j] === 'B') {
          if (i === 0 && j === 0) {
            if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 } else if (newboardCopy[i][j + 1] === 'B') { }
            if (typeof newboardCopy[i + 1][j + 1] === 'number') { newboardCopy[i + 1][j + 1] += 1 } else if (newboardCopy[i + 1][j + 1] === 'B') { }
            if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 } else if (newboardCopy[i + 1][j] === 'B') { }
          } else
            if (i === 0 && j === 9) {
              if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 } else if (newboardCopy[i + 1][j] === 'B') { }
              if (typeof newboardCopy[i + 1][j - 1] === 'number') { newboardCopy[i + 1][j - 1] += 1 } else if (newboardCopy[i + 1][j - 1] === 'B') { }
              if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 } else if (newboardCopy[i][j - 1] === 'B') { }
            } else
              if (i === 9 && j === 0) {
                if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 } else if (newboardCopy[i - 1][j] === 'B') { }
                if (typeof newboardCopy[i - 1][j + 1] === 'number') { newboardCopy[i - 1][j + 1] += 1 } else if (newboardCopy[i - 1][j + 1] === 'B') { }
                if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 } else if (newboardCopy[i][j + 1] === 'B') { }
              } else
                if (i === 9 && j === 9) {
                  if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 } else if (newboardCopy[i][j - 1] === 'B') { }
                  if (typeof newboardCopy[i - 1][j - 1] === 'number') { newboardCopy[i - 1][j - 1] += 1 } else if (newboardCopy[i - 1][j - 1] === 'B') { }
                  if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 } else if (newboardCopy[i - 1][j] === 'B') { }
                } else
                  if (i === 0) {
                    if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 } else if (newboardCopy[i][j + 1] === 'B') { }
                    if (typeof newboardCopy[i + 1][j + 1] === 'number') { newboardCopy[i + 1][j + 1] += 1 } else if (newboardCopy[i + 1][j + 1] === 'B') { }
                    if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 } else if (newboardCopy[i + 1][j] === 'B') { }
                    if (typeof newboardCopy[i + 1][j - 1] === 'number') { newboardCopy[i + 1][j - 1] += 1 } else if (newboardCopy[i + 1][j - 1] === 'B') { }
                    if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 } else if (newboardCopy[i][j - 1] === 'B') { }
                  } else
                    if (j === 9) {
                      if (typeof newboardCopy[i - 1][j - 1] === 'number') { newboardCopy[i - 1][j - 1] += 1 } else if (newboardCopy[i - 1][j - 1] === 'B') { }
                      if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 } else if (newboardCopy[i - 1][j] === 'B') { }
                      if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 } else if (newboardCopy[i + 1][j] === 'B') { }
                      if (typeof newboardCopy[i + 1][j - 1] === 'number') { newboardCopy[i + 1][j - 1] += 1 } else if (newboardCopy[i + 1][j - 1] === 'B') { }
                      if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 } else if (newboardCopy[i][j - 1] === 'B') { }
                    } else
                      if (j === 0) {
                        if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 } else if (newboardCopy[i - 1][j] === 'B') { }
                        if (typeof newboardCopy[i - 1][j + 1] === 'number') { newboardCopy[i - 1][j + 1] += 1 } else if (newboardCopy[i - 1][j + 1] === 'B') { }
                        if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 } else if (newboardCopy[i][j + 1] === 'B') { }
                        if (typeof newboardCopy[i + 1][j + 1] === 'number') { newboardCopy[i + 1][j + 1] += 1 } else if (newboardCopy[i + 1][j + 1] === 'B') { }
                        if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 } else if (newboardCopy[i + 1][j] === 'B') { }
                      } else
                        if (i === 9) {
                          if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 } else if (newboardCopy[i][j - 1] === 'B') { }
                          if (typeof newboardCopy[i - 1][j - 1] === 'number') { newboardCopy[i - 1][j - 1] += 1 } else if (newboardCopy[i - 1][j - 1] === 'B') { }
                          if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 } else if (newboardCopy[i - 1][j] === 'B') { }
                          if (typeof newboardCopy[i - 1][j + 1] === 'number') { newboardCopy[i - 1][j + 1] += 1 } else if (newboardCopy[i - 1][j + 1] === 'B') { }
                          if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 } else if (newboardCopy[i][j + 1] === 'B') { }
                        } else {
                          if (typeof newboardCopy[i - 1][j - 1] === 'number') { newboardCopy[i - 1][j - 1] += 1 } else if (newboardCopy[i - 1][j - 1] === 'B') { }
                          if (typeof newboardCopy[i - 1][j] === 'number') { newboardCopy[i - 1][j] += 1 } else if (newboardCopy[i - 1][j] === 'B') { }
                          if (typeof newboardCopy[i - 1][j + 1] === 'number') { newboardCopy[i - 1][j + 1] += 1 } else if (newboardCopy[i - 1][j + 1] === 'B') { }
                          if (typeof newboardCopy[i][j + 1] === 'number') { newboardCopy[i][j + 1] += 1 } else if (newboardCopy[i][j + 1] === 'B') { }
                          if (typeof newboardCopy[i + 1][j + 1] === 'number') { newboardCopy[i + 1][j + 1] += 1 } else if (newboardCopy[i + 1][j + 1] === 'B') { }
                          if (typeof newboardCopy[i + 1][j] === 'number') { newboardCopy[i + 1][j] += 1 } else if (newboardCopy[i + 1][j] === 'B') { }
                          if (typeof newboardCopy[i + 1][j - 1] === 'number') { newboardCopy[i + 1][j - 1] += 1 } else if (newboardCopy[i + 1][j - 1] === 'B') { }
                          if (typeof newboardCopy[i][j - 1] === 'number') { newboardCopy[i][j - 1] += 1 } else if (newboardCopy[i][j - 1] === 'B') { }
                        }
        }
      }
    }
    setBoard([...newboardCopy])
  }

  const generateEmptyArr = () => {
    let newArr = []
    let newBigArr = []
    for (let i = 0; i < 10; i++) {

      for (let j = 0; j < 10; j++) {
        newArr = [...newArr, '']
      }
      newBigArr = [...newBigArr, newArr]
      newArr = []
    }
    let emptyArr = [...newBigArr]
    return emptyArr
  }

  const openTile = (event) => {
    let tileCoord = event.target.name
    let playerBoardCopy = [...playerBoard]
    let boardCopy = [...board]
    if (boardCopy[tileCoord[0]][tileCoord[1]] === 0) {
      playerBoardCopy[tileCoord[0]][tileCoord[1]] = 'C'
      let i = Number(tileCoord[0])
      let j = Number(tileCoord[1])
        if (i === 0 && j === 0) {
          if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
          if (typeof boardCopy[i + 1][j + 1] === 'number') { playerBoardCopy[i + 1][j + 1] = 'C' }
          if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
        } else if (i === 0 && j === 9) {
            if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
            if (typeof boardCopy[i + 1][j - 1] === 'number') { playerBoardCopy[i + 1][j - 1] = 'C' }
            if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
          } else if (i === 9 && j === 0) {
              if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
              if (typeof boardCopy[i - 1][j + 1] === 'number') { playerBoardCopy[i - 1][j + 1] = 'C' }
              if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
            } else if (i === 9 && j === 9) {
                if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
                if (typeof boardCopy[i - 1][j - 1] === 'number') { playerBoardCopy[i - 1][j - 1] = 'C' }
                if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
              } else if (i === 0) {
                  if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
                  if (typeof boardCopy[i + 1][j + 1] === 'number') { playerBoardCopy[i + 1][j + 1] = 'C' }
                  if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
                  if (typeof boardCopy[i + 1][j - 1] === 'number') { playerBoardCopy[i + 1][j - 1] = 'C' }
                  if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
                } else if (j === 9) {
                    if (typeof boardCopy[i - 1][j - 1] === 'number') { playerBoardCopy[i - 1][j - 1] = 'C' }
                    if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
                    if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
                    if (typeof boardCopy[i + 1][j - 1] === 'number') { playerBoardCopy[i + 1][j - 1] = 'C' }
                    if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
                  } else if (j === 0) {
                      if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
                      if (typeof boardCopy[i - 1][j + 1] === 'number') { playerBoardCopy[i - 1][j + 1] = 'C' }
                      if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
                      if (typeof boardCopy[i + 1][j + 1] === 'number') { playerBoardCopy[i + 1][j + 1] = 'C' }
                      if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
                    } else if (i === 9) {
                        if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
                        if (typeof boardCopy[i - 1][j - 1] === 'number') { playerBoardCopy[i - 1][j - 1] = 'C' }
                        if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
                        if (typeof boardCopy[i - 1][j + 1] === 'number') { playerBoardCopy[i - 1][j + 1] = 'C' }
                        if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
                      } else {
                        if (typeof boardCopy[i - 1][j - 1] === 'number') { playerBoardCopy[i - 1][j - 1] = 'C' }
                        if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
                        if (typeof boardCopy[i - 1][j + 1] === 'number') { playerBoardCopy[i - 1][j + 1] = 'C' }
                        if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
                        if (typeof boardCopy[i + 1][j + 1] === 'number') { playerBoardCopy[i + 1][j + 1] = 'C' }
                        if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
                        if (typeof boardCopy[i + 1][j - 1] === 'number') { playerBoardCopy[i + 1][j - 1] = 'C' }
                        if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
                      }
        setPlayerBoard(playerBoardCopy)
  } else if (boardCopy[tileCoord[0]][tileCoord[1]] !== 0) {
    playerBoardCopy[tileCoord[0]][tileCoord[1]] = boardCopy[tileCoord[0]][tileCoord[1]]
    setPlayerBoard(playerBoardCopy)
  }
  
}

  const clickTileLB = (event) => {
    let boardCopy = [...board]
    let tileCoord = event.target.name
    if (boardCopy[tileCoord[0]][tileCoord[1]] === 'B') {
      playerLose()
    } else if (event.target.value !== 'B') {
      openTile(event)
    }
  }

  const clickTileRB = (event) => {

    event.preventDefault()
    let tileCoord = event.target.name
    let playerBoardCopy = [...playerBoard]
    let boardCopy = [...board]

    if (flags > 0) {
      if (boardCopy[tileCoord[0]][tileCoord[1]] === 'B' && flags > 0) {
        boardCopy[tileCoord[0]][tileCoord[1]] = 'b'
        playerBoardCopy[tileCoord[0]][tileCoord[1]] = 'F'
        setBombs(bombs - 1)
        setBoard(boardCopy)
        setPlayerBoard(playerBoardCopy)
        setFlag(flags - 1)
      } else if (boardCopy[tileCoord[0]][tileCoord[1]] === 'b' && flags > 0) {
        boardCopy[tileCoord[0]][tileCoord[1]] = 'B'
        playerBoardCopy[tileCoord[0]][tileCoord[1]] = ''
        setBombs(bombs + 1)
        setBoard(boardCopy)
        setPlayerBoard(playerBoardCopy)
        setFlag(flags + 1)
      } else if (playerBoardCopy[tileCoord[0]][tileCoord[1]] === 'F' && flags >= 0) {
        playerBoardCopy[tileCoord[0]][tileCoord[1]] = ''
        setPlayerBoard(playerBoardCopy)
        setFlag(flags + 1)
      } else if (flags > 0) {
        playerBoardCopy[tileCoord[0]][tileCoord[1]] = 'F'
        setPlayerBoard(playerBoardCopy)
        setFlag(flags - 1)
      }
    } else {
      alert('too many flags')
    }
  }

  const playerWin = () => {
    alert('you win')
  }
  const playerLose = () => {
    alert('you lose')
    generateboard()
  }
  useEffect(() => { if (bombs === 0) { playerWin() } })

  return (
    <div className={style.calculator}>
      <button onClick={generateboard}></button>
      <div className={style.tiles}>
        {playerBoard.map((t, i, row) => row[i].map((tile, j) =>
          <button  key={`${i}${j}`} name={`${i}${j}`} value={tile} onClick={clickTileLB} onContextMenu={clickTileRB}>{(playerBoard[i][j] === 'C' || typeof playerBoard[i][j] === 'number' ? board[i][j] : '') || (playerBoard[i][j] === 'F' ? 'F' : '') }</button>)
        )}

        {board.map((t, i, row) => row[i].map((tile, j) =>
          <button key={`${i}${j}`} name={`${i}${j}`} value={tile} onClick={clickTileLB} onContextMenu={clickTileRB}>{tile}</button>)
        )}
      </div>
    </div>

  )
}

export default Sapper