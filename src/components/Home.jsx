import React, { useState } from 'react'
import SinglePlayerForm from './SinglePlayerForm';
import MultiPlayerForm from './MultiPlayerForm';
import SinglePlayer from './SinglePlayer';
import MultiPlayer from "./MultiPlayer"

const Home = ({ gameMode, setGameMode, multiPlayerMode, setMultiPlayerMode }) => {
  const [singlePlayer, setSinglePlayer] = useState(true);
  const [multiPlayer, setMultiPlayer] = useState(false);
  const [lonePlayer, setLonePlayer] = useState('')
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  // const [gameMode, setGameMode] = useState(false);


  const handleStartGame = (e) => {
    e.preventDefault()
    setMultiPlayerMode(true)
    setGameMode(false)
    console.log(multiPlayerMode)
    console.log(playerOne, playerTwo)

  }

  const handleSinglePlayer = (e) => {
    e.preventDefault()
    setMultiPlayerMode(false)
    setGameMode(true)
  }

  return (

    <>
      <div className='w-screen max-h-screen'>
        <div className='w-full border-b border-sky-400 flex justify-around items-center text-sky-400'>
          <h4 className={`cursor-pointer font-semibold text-lg mb-1 ${singlePlayer && "border-b-4 border-sky-400"}`} onClick={() => {
            setSinglePlayer(true)
            setMultiPlayer(false)
            setGameMode(false)
          }} >Single Player</h4>
          <h4 className={`cursor-pointer font-semibold text-lg mb-1 ${multiPlayer && "border-b-4 border-sky-400"}`} onClick={() => {
            setMultiPlayer(true)
            setSinglePlayer(false)
            setGameMode(false)
          }}>Multi Player</h4>
        </div>
        <div className='p-2 w-full'>
          {!singlePlayer && !multiPlayer && !gameMode && <div className='flex flex-col items-center justify-center w-full'> <h2 className='text-2xl text-white'>Select Player</h2> </div>}
          {singlePlayer && !gameMode && <SinglePlayerForm handleStart={handleSinglePlayer} player={lonePlayer} setLonePlayer={setLonePlayer} />}
          {multiPlayer && !multiPlayerMode && <MultiPlayerForm handleStart={handleStartGame} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} player1={playerOne} player2={playerTwo} />}
          {gameMode && <SinglePlayer />}
          {multiPlayerMode && <MultiPlayer />}
        </div>

      </div>
    </>
  )
}

export default Home