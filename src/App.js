import { useState } from "react"
import './App.css';
import Home from './components/Home';


function App() {

  const [gameMode, setGameMode] = useState(false);
  return (
    <div className=''>
      <h2 className='font-semibold text-2xl text-center mb-4 uppercase'>Memory Game</h2>
      <Home gameMode={gameMode} setGameMode={setGameMode} />
    </div>
  );
}

export default App;
