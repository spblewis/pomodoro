import React, { useEffect } from 'react';
import store from './../store.js';
import { start, stop, tick, reset } from './../reducers/reducer.js'

export function Timer({ appState }) {

    useEffect(() => {
        let timer;
        if (appState.running && appState.timeLeft > 0) {
            timer = setTimeout(() => {
                store.dispatch(tick())
            }, 1000);
        } 

        return () => clearTimeout(timer);
    })

    const handleStartStop = () => {
        return (appState.running ? 
                store.dispatch(stop()) : 
                store.dispatch(start()))
    }

    const handleReset = () => {
        store.dispatch(reset());
    }

    const minutes = Math.floor(appState.timeLeft / 60);
    const seconds = appState.timeLeft % 60;
    const padTime = (num) => {
        return num.toString().padStart(2, '0')
    }

    return (

        <div id="timer">
                <div id="timer-label">Session</div>
                <div id="time-left">{`
                    ${padTime(minutes)}:${padTime(seconds)}`}
                </div>

                <div>{appState.running.toString()}</div>
                <button 
                    id="start_stop"
                    onClick={handleStartStop}
                >{appState.running ? 'Stop' : 'Start'}</button>
                <button id="reset" onClick={handleReset}>Reset</button>

        </div>
    )


}
