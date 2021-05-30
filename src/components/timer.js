import React, { useEffect, useRef } from 'react';
import store from './../store.js';
import { start, stop, tick, reset } from './../reducers/reducer.js'
import beep from "./../sounds/bells.mp3"



export function Timer({ appState }) {
    //pull audio from render method
    const audio = useRef();
    const currentAudio = audio.current;

    //play audio if time is 0
    useEffect(() => {
        if (appState.timeLeft === 0) {
            currentAudio.play();
            
        }
    });

    //dispatch ticks if timer is running
    useEffect(() => {
        let timer;
        if (appState.running) {
            timer = setTimeout(() => {
                store.dispatch(tick())
            }, 1000);
        } 

        return () => clearTimeout(timer);
    })

    const handleStartStop = () => {
        return (appState.running ? 
                store.dispatch(stop()) : 
                store.dispatch(start())
        )
    }

    //stop audio and reset initial state
    const handleReset = () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        store.dispatch(reset());
    }

    //format time as mm:ss 
    const padTime = (num) => {
        return num.toString().padStart(2, '0')
    }
    const minutes = padTime(Math.floor(appState.timeLeft / 60));
    const seconds = padTime(appState.timeLeft % 60);


    return (

        <div id="timer">
                <div id="timer-label">{appState.working? 'Session' : 'Break'}</div>
                <div id="time-left">{`
                    ${minutes}:${seconds}`}
                </div>
                <div>{appState.running.toString()}</div>
                <button 
                    id="start_stop"
                    onClick={handleStartStop}
                >{appState.running ? 'Stop' : 'Start'}</button>
                <button id="reset" onClick={handleReset}>Reset</button>
                <audio
                    id="beep"
                    src={beep}
                    ref={audio} 
                ></audio>
        </div>
    )


}
