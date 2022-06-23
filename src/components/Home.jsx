import React, { useState } from 'react'
import SinglePlayerForm from './SinglePlayerForm';
import MultiPlayerForm from './MultiPlayerForm';
import SinglePlayer from './SinglePlayer';

const Home = ({ gameMode, setGameMode }) => {
  const [singlePlayer, setSinglePlayer] = useState(false);
  const [multiPlayer, setMultiPlayer] = useState(false);
  const [lonePlayer, setLonePlayer] = useState('')
  const [playerOne, setPlayerOne] = useState('');
  const [playerTwo, setPlayerTwo] = useState('');
  // const [gameMode, setGameMode] = useState(false);


  const handleStartGame = (e) => {
    e.preventDefault()
    setMultiPlayer(false)
    setGameMode(true)
    setPlayerOne("")
    setPlayerTwo("")
  }

  const handleSinglePlayer = (e) => {
    e.preventDefault()
    console.log("Player: ", lonePlayer);
    setLonePlayer("")
    setGameMode(true)
  }

  return (

    <>
      <div className='w-screen'>
        <div className='w-full border-b border-sky-400 flex justify-around items-center text-sky-400'>
          <h4 className={`cursor-pointer font-semibold text-lg mb-2 ${singlePlayer && "border-b-4 border-sky-400"}`} onClick={() => {
            setSinglePlayer(true)
            setMultiPlayer(false)
            setGameMode(false)
          }} >Single Player</h4>
          <h4 className={`cursor-pointer font-semibold text-lg mb-2 ${multiPlayer && "border-b-4 border-sky-400"}`} onClick={() => {
            setMultiPlayer(true)
            setSinglePlayer(false)
            setGameMode(false)
          }}>Multi Player</h4>
        </div>
        <div className='p-4 w-full'>
          {!singlePlayer && !multiPlayer && !gameMode && <div className='flex flex-col items-center justify-center w-full'> <h2 className='text-2xl text-white'>Select Player</h2> </div>}
          {singlePlayer && !gameMode && <SinglePlayerForm handleStart={handleSinglePlayer} player={lonePlayer} setLonePlayer={setLonePlayer} />}
          {multiPlayer && <MultiPlayerForm handleStart={handleStartGame} setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo} player1={playerOne} player2={playerTwo} />}
          {gameMode && <SinglePlayer />}
        </div>

      </div>
    </>
  )
}

export default Home