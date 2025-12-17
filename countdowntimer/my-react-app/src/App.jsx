import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import InputTimer from "./InputTimer";
function App() {
  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerid, setTimerId] = useState(0);
  
  const [isPaused, setIsPaused] = useState(false);
  const handleStart = () => {
    if (hours < 0 || minutes < 0 || seconds <= 0) {
      alert("enter input ");
    }
    setIsStart(true);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    console.log(e.target.id);
    const value = parseInt(e.target.value);
    const id = e.target.id;
    if (id === "hours") {
      setHours(value);
    } else if (id === "minutes") setMinutes(value);
    else setSeconds(value);
  };

  const runTimer = (sec, min, hr, tid) => {
    if (sec > 0) {
      setSeconds((sec = sec - 1));
    } else if (sec === 0 && minutes > 0) {
      setMinutes((min) => min - 1);
      setSeconds(59);
    } else {
      setHours((hr) => hr - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (sec === 0 && (min === 0) & (hr === 0)) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      clearInterval(tid);
      alert("timer is finished");
    }
  };
  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTimer(seconds, minutes, hours, tid);
      }, 1000);

      setTimerId(tid);
    }
    return () => {
      clearInterval(tid);
    };
  }, [isStart, hours, minutes, seconds]);
  console.log(hours, minutes, seconds);

  const handlePause = () => {
    setIsPaused(true);
    clearInterval(timerid);
  };




const resetTimer=()=>{
 setHours(0);
    setMinutes(0);
    setSeocnds(0);
    clearInterval(timerid);
}





  const handleReset = () => {
    setIsStart(false);
   resetTimer();


  };
  const handleResume = () => {
    setIsPaused(false);
    runTimer(seconds, minutes, hours);
  };

  return (
    <>
      {!isStart && (<InputTimer
      handleInput={handleInput}
    handleStart={handleStart}
     /> )}

      {isStart && ( 
        <div className="show-container">
          <h1>CountDown Timer</h1>
          <div className="timer-box">
            <div>{hours < 10 ? `0${hours}` : hours}</div>
            <span>:</span>
            <div>{minutes < 10 ? `0${minutes}` : minutes}</div>
            <span>:</span>
            <div>{seconds < 10 ? `0${seconds}` : seconds}</div>
          </div>

          <div className="action-box">
            {!isPaused && (
              <button className="timer-button" onClick={handlePause}>
                Pause
              </button>
            )}

            {isPaused && (
              <button className="timer-button" onClick={handleResume}>
                Resume
              </button>
            )}
            <button className="timer-button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      )}
    </>
  );
}



export default App;
