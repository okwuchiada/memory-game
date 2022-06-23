import React from 'react'
import Button from './Button'
import Form, { Input } from './Form'

const MultiPlayer = ({ setPlayerOne, setPlayerTwo, player1, player2, handleStart }) => {
  return (
    <div className='multi-player flex flex-col items-center w-full px-4 text-white'>
      <Form onSubmit={handleStart} className=" w-full lg:w-1/2">
        <div className='flex items-center justify-center lg:justify-between w-full my-2 text-white flex-col lg:flex-row'>
          <label>Player 1 Name: </label>
          <Input type='text' onChange={(e) => setPlayerOne(e.target.value)} value={player1} className="w-4/5 text-gray-700" />
        </div>
        <div className='flex items-center justify-center flex-col lg:flex-row w-full my-2 lg:justify-between text-white '>
          <label>Player 2 Name: </label>
          <Input type='text' onChange={(e) => setPlayerTwo(e.target.value)} value={player2} className="w-4/5 text-gray-700" />
        </div>
        <Button className="bg-sky-200 mt-8 text-gray-700" type="submit">Start Game</Button>
      </Form>

    </div>
  )
}

export default MultiPlayer