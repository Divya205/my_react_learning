import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallenge({title ,targetTime}){
    const timer=useRef();
    const dialog=useRef();
   
    const [timerExpired, setTimerExpired]=useState(false);
    const [TimerStarted, setTimerStarted]=useState(false)
    //let timer;
    
    //to dim the background
   

    function handleStart(){
       setTimerStarted(true);
       timer.current= setTimeout(()=>{
            setTimerExpired(true);
            dialog.current.open();//open method from resulmodal
        }, targetTime * 1000);
       
    }

    function handleStop(){
        clearTimeout(timer.current);
    }
    return(
        <>
         <ResultModal ref={dialog} targetTime={targetTime} result='lost'>
            </ResultModal>
        <section className="Challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
             {targetTime} second{targetTime>1?'s':""}
            </p>
            <p className={TimerStarted ? "active" : undefined}>
                <button onClick={TimerStarted? handleStop : handleStart}>
                    {TimerStarted ? 'Stop' : "Start"} Challenge
                </button>
            </p>
            <p className="">
               {TimerStarted ? 'Timer is runningg..' :'Timer is inactive'}
            </p>
        </section>
        </>
    )
}