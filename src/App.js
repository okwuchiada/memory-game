import { useState } from "react"
import './App.css';
import Home from './components/Home';


function App() {

  const [singlePlayerMode, setSinglePlayerMode] = useState(false);
  const [multiPlayerMode, setMultiPlayerMode] = useState(false)
  return (
    <div className=''>
      <h2 className='font-semibold text-2xl text-center mb-2 mt-2 uppercase'>Memory Game</h2>
      <Home gameMode={singlePlayerMode} setGameMode={setSinglePlayerMode} multiPlayerMode={multiPlayerMode} setMultiPlayerMode={setMultiPlayerMode} />
    </div>
  );
}

export default App;
