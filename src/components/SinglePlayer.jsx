import React, { useEffect, useState } from 'react'
import Card from './Card'



const SinglePlayer = ({ lonePlayer }) => {
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
    const [moves, setMoves] = useState(0)

    useEffect(() => {

        if (score === 8) {
            setRestart(true)
        }
        
    }, [score])

    const checkId = (selectedId) => {
        if (cards[selectedId].id === cards[prev].id) {
            cards[selectedId].status = "matched"
            cards[prev].status = "matched"
            setCards([...cards])
            setScore(score + 1)
            setPrev(-1)
            // if (score === 7) {
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
        if (cards[id].status !== "matched") {
            if (prev === -1) {
                cards[id].status = "flipped"
                setMoves(moves + 1)
                setCards([...cards])
                setPrev(id)
                // if (moves >= 20) {
                //     setRestart(true)
                // }
            } else {
                checkId(id)
            }
        }
    }

    const restartGame = () => {
        setCards(images.sort(() => Math.random() - 0.5))
        setScore(0)
        setMoves(0)
        setRestart(false)
    }


    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className='game-container h-[450px] w-screen lg:w-[800px] grid grid-cols-4 gap-2 px-4 lg:p-1'>
                {cards.map((card, index) => {
                    return <Card key={index} id={index} card={card} handleClick={handleClick} />
                })}
            </div>
            {   restart &&  <div className='mt-2 lg:mt-4 text-xl font-bold w-full flex justify-evenly items-center'>
                    Nice one {lonePlayer}, you scored {score} points in {moves} moves
                    <br/>
                </div>
            }
            { !restart && <div className='mt-2 lg:mt-4 text-xl font-bold w-full flex justify-evenly items-center'>
                <p>Player: {lonePlayer}</p>
                <p>Score: {score}</p>
                <p>Turns: {moves}</p>
                </div> 
            }
            {restart && <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1 mb-1" onClick={restartGame}>
                Restart
            </button>}
        </div>
    )
}

export default SinglePlayer