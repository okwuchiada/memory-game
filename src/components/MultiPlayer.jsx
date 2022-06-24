import React, { useState } from 'react'
import Card from './Card'



const MultiPlayer = () => {
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

  const [prev, setPrev] = useState(-1)
  const [restart, setRestart] = useState(false)
  const [score, setScore] = useState(0)
  const [score1, setScoreOne] = useState(0)
  const [score2, setScoreTwo] = useState(0)
  const [moves, setMoves] = useState(0)
  const [player1, setPlayerOne] = useState(true)
  const [player2, setPlayerTwo] = useState(false)

  const checkId = (selectedId) => {
    if (cards[selectedId].id === cards[prev].id) {
      cards[selectedId].status = "matched"
      cards[prev].status = "matched"
      setCards([...cards])
      setScore(score + 1)
      // if(player1){
      //   setScoreOne(score1 + 1)
      //   setPlayerOne(false)
      // }else if(player2){
      //   setScoreTwo(score2 + 1)
      //   setPlayerTwo(false)
      // }
      setPrev(-1)
      if (score === 7) {
        setRestart(true)
      }
      // if (score1 || score2 === 7) {
      //     setRestart(true)
      // }
    } else {
      cards[selectedId].status = "unmatched"
      cards[prev].status = "unmatched"
      setCards([...cards])
      setTimeout(() => {
        cards[selectedId].status = ""
        cards[prev].status = ""
        setCards([...cards])
        setPrev(-1)
      }, 1000)
    }
  }

  const handleClick = (id) => {
    if (prev === -1) {
      cards[id].status = "flipped"
      setMoves(moves + 1)
      setCards([...cards])
      setPrev(id)
      if (moves >= 20) {
        setRestart(true)
      }
    } else {
      checkId(id)
    }

  }

  const restartGame = () => {
    setCards(images.sort(() => Math.random() - 0.5))
    setScore(0)
    setMoves(0)
    setRestart(false)
  }


  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className='game-container h-[500px] w-screen lg:w-2/3 grid grid-cols-4 gap-2 px-4 lg:p-1'>
        {cards.map((card, index) => {
          return <Card key={index} id={index} card={card} handleClick={handleClick} />
        })}

      </div>
      <div className='flex flex-col items-center justify-center w-1/6'>
        <div className='mt-2 lg:mt-4 text-xl font-bold flex justify-evenly items-center w-full'>
          <p>Score: {score}</p>
          <p>Turns: {moves}</p>
        </div>
        {restart && <button className="bg-blue-500 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mb-1" onClick={restartGame}>
          Restart
        </button>}
      </div>


    </div>
  )
}

export default MultiPlayer