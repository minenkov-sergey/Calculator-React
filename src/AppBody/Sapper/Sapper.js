import React, { useState, useEffect } from 'react';
import style from './Sapper.module.css';
import flagImg from './../../assets/flag4.png'


const Sapper = (props) => {

  const [board, setBoard] = useState([])
  const [playerBoard, setPlayerBoard] = useState([])
  const [flags, setFlag] = useState()
  const [bombs, setBombs] = useState()

  const [numberArea, setNumberArea] = useState('')

  let boardCopy = []
  const generateboard = () => {
    let emptyArr = generateEmptyArr()
    setPlayerBoard([...emptyArr])
    setBoard([])
    generateBombs()
    generateHintsOfBombs()
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
    let tileCoord = []
    tileCoord = [String(event.target.name), ...tileCoord]
    
    let playerBoardCopy = [...playerBoard]
    let boardCopy = [...board]
    
    if (boardCopy[tileCoord[0][0]][tileCoord[0][1]] === 0) {
      while(tileCoord.length>0) {
    let i = Number(tileCoord[0][0])
    let j = Number(tileCoord[0][1])
      if (i === 0 && j === 0) {
        if (boardCopy[i][j + 1] === 0 && playerBoardCopy[i][j + 1] !=='C') {tileCoord = [ String(i)+String(j+1), ...tileCoord]}
        if (boardCopy[i+1][j] === 0 && playerBoardCopy[i+1][j] !=='C') {tileCoord = [ String(i+1)+String(j) , ...tileCoord]}
        if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
        //if (typeof boardCopy[i + 1][j + 1] === 'number') { playerBoardCopy[i + 1][j + 1] = 'C' }
        if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
        
      } else if (i === 0 && j === 9) {
        if (boardCopy[i][j - 1] === 0 && playerBoardCopy[i][j - 1] !=='C') {tileCoord = [ String(i)+String(j-1) , ...tileCoord]}
        if (boardCopy[i + 1][j] === 0 && playerBoardCopy[i + 1][j] !=='C') {tileCoord = [ String(i+1)+String(j) , ...tileCoord]}
        if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
        //if (typeof boardCopy[i + 1][j - 1] === 'number') { playerBoardCopy[i + 1][j - 1] = 'C' }
        if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
        
      } else if (i === 9 && j === 0) {
        if (boardCopy[i-1][j] === 0 && playerBoardCopy[i-1][j] !=='C') {tileCoord = [ String(i-1)+String(j) , ...tileCoord]}
        if (boardCopy[i][j+1] === 0 && playerBoardCopy[i][j+1] !=='C') {tileCoord = [ String(i)+String(j+1) , ...tileCoord]}
        if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
        //if (typeof boardCopy[i - 1][j + 1] === 'number') { playerBoardCopy[i - 1][j + 1] = 'C' }
        if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
        
      } else if (i === 9 && j === 9) {
        if (boardCopy[i-1][j] === 0 && playerBoardCopy[i-1][j] !=='C') {tileCoord = [ String(i-1)+String(j) , ...tileCoord]}
        if (boardCopy[i][j-1] === 0 && playerBoardCopy[i][j-1] !=='C') {tileCoord = [ String(i)+String(j-1) , ...tileCoord]}
        if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
        //if (typeof boardCopy[i - 1][j - 1] === 'number') { playerBoardCopy[i - 1][j - 1] = 'C' }
        if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
        
      } else if (i === 0) {
        if (boardCopy[i][j-1] === 0 && playerBoardCopy[i][j-1] !=='C') {tileCoord = [ String(i)+String(j-1) , ...tileCoord]}
        if (boardCopy[i][j+1] === 0 && playerBoardCopy[i][j+1] !=='C') {tileCoord = [ String(i)+String(j+1) , ...tileCoord]}
        if (boardCopy[i+1][j] === 0 && playerBoardCopy[i+1][j] !=='C') {tileCoord = [ String(i+1)+String(j) , ...tileCoord]}
        if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
        //if (typeof boardCopy[i + 1][j + 1] === 'number') { playerBoardCopy[i + 1][j + 1] = 'C' }
        if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
        //if (typeof boardCopy[i + 1][j - 1] === 'number') { playerBoardCopy[i + 1][j - 1] = 'C' }
        if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
        
      } else if (j === 9) {
        if (boardCopy[i-1][j] === 0 && playerBoardCopy[i-1][j] !=='C') {tileCoord = [ String(i-1)+String(j) , ...tileCoord]}
        if (boardCopy[i][j-1] === 0 && playerBoardCopy[i][j-1] !=='C') {tileCoord = [ String(i)+String(j-1) , ...tileCoord]}
        if (boardCopy[i+1][j] === 0 && playerBoardCopy[i+1][j] !=='C') {tileCoord = [ String(i+1)+String(j) , ...tileCoord]}
        //if (typeof boardCopy[i - 1][j - 1] === 'number') { playerBoardCopy[i - 1][j - 1] = 'C' }
        if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
        if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
        //if (typeof boardCopy[i + 1][j - 1] === 'number') { playerBoardCopy[i + 1][j - 1] = 'C' }
        if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
        
      } else if (j === 0) {
        if (boardCopy[i-1][j] === 0 && playerBoardCopy[i-1][j] !=='C') {tileCoord = [ String(i-1)+String(j) , ...tileCoord]}
        if (boardCopy[i][j+1] === 0 && playerBoardCopy[i][j+1] !=='C') {tileCoord = [ String(i)+String(j+1) , ...tileCoord]}
        if (boardCopy[i+1][j] === 0 && playerBoardCopy[i+1][j] !=='C') {tileCoord = [ String(i+1)+String(j) , ...tileCoord]}
        if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
        //if (typeof boardCopy[i - 1][j + 1] === 'number') { playerBoardCopy[i - 1][j + 1] = 'C' }
        if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
        //if (typeof boardCopy[i + 1][j + 1] === 'number') { playerBoardCopy[i + 1][j + 1] = 'C' }
        if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
        
      } else if (i === 9) {
        if (boardCopy[i][j-1] === 0 && playerBoardCopy[i][j-1] !=='C') {tileCoord = [ String(i-1)+String(j-1) , ...tileCoord]}
        if (boardCopy[i-1][j] === 0 && playerBoardCopy[i-1][j] !=='C') {tileCoord = [ String(i-1)+String(j) , ...tileCoord]}
        if (boardCopy[i][j+1] === 0 && playerBoardCopy[i][j+1] !=='C') {tileCoord = [ String(i)+String(j+1) , ...tileCoord]}
        if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
        //if (typeof boardCopy[i - 1][j - 1] === 'number') { playerBoardCopy[i - 1][j - 1] = 'C' }
        if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
        //if (typeof boardCopy[i - 1][j + 1] === 'number') { playerBoardCopy[i - 1][j + 1] = 'C' }
        if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
        
      } else {
        if (boardCopy[i-1][j] === 0 && playerBoardCopy[i-1][j] !=='C') {tileCoord = [ String(i-1)+String(j) , ...tileCoord]}
        if (boardCopy[i][j+1] === 0 && playerBoardCopy[i][j+1] !=='C') {tileCoord = [ String(i)+String(j+1) , ...tileCoord]}
        if (boardCopy[i+1][j] === 0 && playerBoardCopy[i+1][j] !=='C') {tileCoord = [ String(i+1)+String(j) , ...tileCoord]}
        if (boardCopy[i][j-1] === 0 && playerBoardCopy[i][j-1] !=='C') {tileCoord = [ String(i)+String(j-1) , ...tileCoord]}
        //if (typeof boardCopy[i - 1][j - 1] === 'number') { playerBoardCopy[i - 1][j - 1] = 'C' }
        if (typeof boardCopy[i - 1][j] === 'number') { playerBoardCopy[i - 1][j] = 'C' }
        //if (typeof boardCopy[i - 1][j + 1] === 'number') { playerBoardCopy[i - 1][j + 1] = 'C' }
        if (typeof boardCopy[i][j + 1] === 'number') { playerBoardCopy[i][j + 1] = 'C' }
        //if (typeof boardCopy[i + 1][j + 1] === 'number') { playerBoardCopy[i + 1][j + 1] = 'C' }
        if (typeof boardCopy[i + 1][j] === 'number') { playerBoardCopy[i + 1][j] = 'C' }
        //if (typeof boardCopy[i + 1][j - 1] === 'number') { playerBoardCopy[i + 1][j - 1] = 'C' }
        if (typeof boardCopy[i][j - 1] === 'number') { playerBoardCopy[i][j - 1] = 'C' }
        

      }
      playerBoardCopy[i][j] = 'C'
      tileCoord.pop()
    }
    setPlayerBoard(playerBoardCopy)
    } else if (boardCopy[tileCoord[0][0]][tileCoord[0][1]] !== 0) {
      playerBoardCopy[tileCoord[0][0]][tileCoord[0][1]] = boardCopy[tileCoord[0][0]][tileCoord[0][1]]
      setPlayerBoard(playerBoardCopy)
    }
  }

  const changeZeroTile = (i, j) => {
    if (boardCopy[i - 1][j] === 0) {
      i -= 1;
      j = j;
    }
  }
  const clickTileLB = (event) => {
    let boardCopy = [...board]
    let tileCoord = event.target.name
    if (boardCopy[tileCoord[0]][tileCoord[1]] === 'B') {
      playerLose()
    } else if (boardCopy[tileCoord[0]][tileCoord[1]] !== 'B') {
      openTile(event)
    }

  }

  const clickTileRB = (event) => {

    event.preventDefault()
    let tileCoord = event.target.name
    let playerBoardCopy = [...playerBoard]
    let boardCopy = [...board]

    if (flags >= 0) {
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
      } else if (flags === 0) {
        setNumberArea('You set too many flags')
        setTimeout(() => {
          setNumberArea('')
        }, 3000)
      }
    }
  }

  const playerWin = () => {
    setNumberArea('You Win!')
    setTimeout(() => {
      generateboard()
      setNumberArea('')
    }, 3000)

  }
  const playerLose = () => {
    setNumberArea('You Lose')
    setTimeout(() => {
      generateboard()
      setNumberArea('')
    }, 3000)
  }

  useEffect(() => {
    let countC = 0;
    playerBoard.forEach((i, j, row) => {
      row[j].forEach((tile, j) => { if (tile === '') { countC += 1 } })
      return true
    })
    if (bombs === 0 && countC === 0) { playerWin() }
  })

  useEffect(() => { generateboard() }, [props.sapper === true])

  return (
    <div className={style.calculator}>
      <div className={style.numberArea} >
        <textarea id='numberArea' value={numberArea}></textarea>
      </div>
      <div className={style.tiles}>
        {playerBoard.map((t, i, row) => row[i].map((tile, j) => {
          console.log('rerender')
          if ((playerBoard[i][j] === 'C') && (typeof board[i][j] === 'number')) { return <div className={style.checked} key={`${i}${j}`} name={`${i}${j}`} value={tile} >{board[i][j] > 0 ? board[i][j] : null}</div> }
          else if (playerBoard[i][j] === 'C') { return <div className={style.checked} key={`${i}${j}`} name={`${i}${j}`} value={tile} ></div> }
          else if (typeof playerBoard[i][j] === 'number') { return <div className={style.checked} key={`${i}${j}`} name={`${i}${j}`} value={tile}>{tile}</div> }
          else if (playerBoard[i][j] === 'F') { return <img src={flagImg} className={style.flag} key={`${i}${j}`} name={`${i}${j}`} value={tile} onContextMenu={clickTileRB}></img> }
          else if (playerBoard[i][j] === '') { return <button className={style.hidden} key={`${i}${j}`} name={`${i}${j}`} value={tile} onClick={clickTileLB} onContextMenu={clickTileRB}>{tile}</button> }
          return
        }))
        }

      </div>
      <div><button onClick={() => { props.sapperToggle(false) }}>Get to work</button></div>
    </div>

  )

}

export default Sapper