import { useState } from 'react';

import Mode from './components/Mode'
import Counter from './components/Counter'
import Setting from './components/Setting'
import './App.css';

function App() {
  const [color, setColor] = useState('#fd6e71')
  const [time, setTime] = useState(45)
  const [isBreak, setIsBreak] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <h1>pomodoro</h1>
      </header>
      <main className="App-main">
        <Mode color ={color} isBreak ={isBreak}/>
        <Counter color={color} time={time} isBreak={isBreak} onBreak={setIsBreak}/>
      </main>
      <Setting onColor={setColor} onTime={setTime} isBreak={isBreak}/>
    </div>
  );
}

export default App;
