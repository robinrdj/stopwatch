import './App.css';
import {useState, useRef} from "react";

function App() {
  const[time,setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const ref = useRef(null);

  function formatTime(time){
    let mins = Math.floor(time/60);
    let secs = time%60;
    return `${mins}:${secs<10?"0":""}${secs}`;
  }
  function handleStart(){
    if(isRunning){
      setIsRunning(!isRunning);
      clearInterval(ref.current);
    }else{
      ref.current = setInterval(()=>{
        setTime((prevState)=>{return prevState+1})
    },1000);
    setIsRunning(true);
    }
     
  }
  function handleReset(){
       setTime(0);
       setIsRunning(false);
       clearInterval(ref.current);
       
  }


  return (
    <div className="App">
      <h3>StopWatch
      </h3>
      <p>Time: {formatTime(time)}</p>
      <button onClick={handleStart}>{isRunning?"stop":"start"}</button>
      <button onClick = {handleReset}>reset</button>
    </div>

  );
}

export default App;
