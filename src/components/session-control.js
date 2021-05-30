import React from 'react';
import { sessionIncrement, sessionDecrement } from './../reducers/reducer.js';
import store from './../store.js';

export function SessionControl({ session }) {

    const incrementSession = () => {
        store.dispatch(sessionIncrement());
    }

    const decrementSession = () => {
        store.dispatch(sessionDecrement());
    }

    return (
        <div>
            <p id="session-label">Session Length</p>
            <p id="session-length">{session}</p>
            <button 
                id="session-increment"
                onClick={incrementSession}
            >
                Session++
            </button>
            <button 
                id="session-decrement"
                onClick={decrementSession}
            >
                Session--
            </button>
        </div>
    )
}