import React, { useState, useEffect } from 'react'
import Card from './Card'



const MultiPlayer = ({ playerOne, playerTwo }) => {
  const images = [
    { "src": "/images/pexels-1.jpg", id: 1, status: "" },
    { "src": "/images/pexels-1.jpg", id: 1, status: "" },
    { "src": "/images/pexels-2.jpg", id: 2, status: "" },
    { "src": "/images/pexels-2.jpg", id: 2, status: "" },
    { "src": "/images/pexels-3.jpg", id: 3, status: "" },
    { "src": "/images/pexels-3.jpg", id: 3, status: "" },
    { "src": "/images/pexels-4.jpg", id: 4, status: "" },
    { "src": "/images/pexels-4.jpg", id: 4, status: "" },
    { "src": "/images/pexels-5.jpg", id: 5, status: "" },
    { "src": "/images/pexels-5.jpg", id: 5, status: "" },
    { "src": "/images/pexels-6.jpg", id: 6, status: "" },
    { "src": "/images/pexels-6.jpg", id: 6, status: "" },
    { "src": "/images/pexels-7.jpg", id: 7, status: "" },
    { "src": "/images/pexels-7.jpg", id: 7, status: "" },
    { "src": "/images/pexels-8.jpg", id: 8, status: "" },
    { "src": "/images/pexels-8.jpg", id: 8, status: "" },
  ]

  const [cards, setCards] = useState(images.sort(() => Math.random() - 0.5))
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [prev, setPrev] = useState(-1)
  const [restart, setRestart] = useState(false)
  const [score, setScore] = useState(0)
  const [score1, setScoreOne] = useState(0)
  const [score2, setScoreTwo] = useState(0)
  const [moves, setMoves] = useState(0)
  const [moves1, setMoves1] = useState(0)
  const [moves2, setMoves2] = useState(0)
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false);
  const [player1, setPlayerOne] = useState(true)
  const [player2, setPlayerTwo] = useState(false)

  useEffect(() => {
    console.log(score1 + score2);
    if ((score1 + score2) == 8) {
      if (score1 > score2) {
        setWinner({
          name: playerOne,
          score: score1,
          moves: moves1
        })
      } else if(score2 > score1) {
        setWinner({
          name: playerTwo,
          score: score2,
          moves: moves2
        })
      } else if(score1 == score2) {
        setIsDraw(true);
      }

      setRestart(true)
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [score1, score2])

  console.log(score1, score2);

  const checkId = (selectedId, currentPlayer) => {
    if (cards[selectedId].id === cards[prev].id) {
      cards[selectedId].status = "matched"
      cards[prev].status = "matched"
      if (currentPlayer === 1) {
        setScoreOne(score1 + 1)
      } else {
        setScoreTwo(score2 + 1)
      }
      setCards([...cards])
      //setScore(score + 1)
      // if(player1){
      //   setScoreOne(score1 + 1)
      //   setPlayerOne(false)
      // }else if(player2){
      //   setScoreTwo(score2 + 1)
      //   setPlayerTwo(false)
      // }
      setPrev(-1);
      // if (score1 || score2 === 7) {
      //     setRestart(true)
      // }
    } else {
      cards[selectedId].status = "unmatched"
      cards[prev].status = "unmatched"
      setCards([...cards])
      if (currentPlayer === 1) {
        setCurrentPlayer(2)
      } else {
        setCurrentPlayer(1)
      }
      setTimeout(() => {
        cards[selectedId].status = ""
        cards[prev].status = ""
        setCards([...cards])
        setPrev(-1)
      }, 1000)
    }

    
  }

  console.log(winner);

  const handleClick = (id, currentPlayer) => {
    console.log(currentPlayer);
    if (!winner && cards[id].status !== "matched") {
      if (prev === -1) {
        cards[id].status = "flipped";
        if (currentPlayer === 1) {
          setMoves1(moves1 + 1)
        } else {
          setMoves2(moves2 + 1)
        }
        //setMoves(moves + 1)
        setCards([...cards])
        setPrev(id)
        if ((moves1 + moves2) >= 20) {
          setRestart(true)
        }
      } else {
        checkId(id, currentPlayer)
      }
    }
  }

  const restartGame = () => {
    setCards(images.sort(() => Math.random() - 0.5))
    setScoreOne(0)
    setScoreTwo(0)
    setMoves1(0)
    setMoves2(0)
    setWinner(null);
    setRestart(false)
    setIsDraw(false);
  }


  return (
    <div className="flex lg:flex-row flex-col items-center justify-center w-full h-full">
      <div className='game-container h-[500px] w-screen lg:w-2/3 grid grid-cols-4 gap-2 px-4 lg:p-1'>
        {cards.map((card, index) => {
          return <Card key={index} id={index} card={card} currentPlayer={currentPlayer} handleClick={handleClick} />
        })}

      </div>
      <div className='flex flex-col items-center justify-center lg:w-1/6 w-full'>
        <div className='mt-2 lg:mt-4 text-xl font-bold flex  justify-evenly items-center w-full'>
        <p>{playerOne}</p>
          <p>Score: {score1}</p>
          <p>Turns: {moves1}</p>
        </div>

        <div className='mt-2 lg:mt-4 text-xl font-bold flex  justify-evenly items-center w-full'>
        <p>{playerTwo}</p>
          <p>Score: {score2}</p>
          <p>Turns: {moves2}</p>
        </div>
        {
          winner && <p>Winner is {winner.name}, with score {winner.score} in {winner.moves}  moves </p>
        }

        {
          isDraw && <p>This round ended in a draw</p>
        }

        {restart && <button className="bg-blue-500 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-1" onClick={restartGame}>
          Restart
        </button>}
      </div>


    </div>
  )
}

export default MultiPlayer