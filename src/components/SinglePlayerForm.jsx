import React from 'react'
import Button from './Button';
import Form, { Input } from './Form';

const SinglePlayer = ({ setLonePlayer, player, handleStart }) => {
  return (
    <div className='single-player flex flex-col items-center w-full text-white'>

      <Form onSubmit={handleStart}>
        <div className='flex flex-col items-center justify-center w-full my-2'>
          <label className='mb-2'>Enter Name</label>
          <Input type='text' onChange={(e) => setLonePlayer(e.target.value)} value={player} name="player" className="w-2/3 text-black" />
        </div><Button type="submit" className="bg-sky-300 text-gray-700">Start Game</Button>
      </Form>

    </div>
  );
}

export default SinglePlayer