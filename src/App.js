import logo from './logo.svg';
import './App.css';
import Title from './components/tittle';
import Subtitle from './components/Subtitle';
import StartButton from './components/Startbutton';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [time, setTime] = useState(10);
  const [clicks, setClicks] = useState(0);
  const [startButton, setStartButton] = useState('Start');
  const [showStartOver, setShowStartOver] = useState(false);

  function startTimer(){
      setInterval(() => {
        setTime((prevTime) => {
        if(prevTime > 0){
         return prevTime - 1
        }
        })
      },1000)
  }
  
  function handleStart(){
    if (!showCounter){
      setShowCounter(true)
      startTimer();
      setStartButton('Click as fast as you can!');
    }else{
      if(time > 0){
        setClicks(clicks + 1);
      }else{
        setShowStartOver(true);
      }
    }
  }

  function startOver(){
    window.location.reload();
  }

  return (
    <div className="container bg-light p-4 rounded">
      <div className="jumbotron mt-3">
        <Title title={'How many clicks can you make in 10s ?'}/>
        <Subtitle subtitle={'Try it and test yourself.'} />
        <div className='d-flex gap-2'>
          <StartButton onClick={handleStart} message={startButton}/>
          {showCounter && <Counter time={time} clicks={clicks}/>}
          {showStartOver && <StartButton onClick={startOver} message='Start Over'/>}
        </div>
      </div>
  </div>

  );
}

export default App;
