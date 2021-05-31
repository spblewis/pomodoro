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
        <div id="session-controls" className="component controls">
            <p id="session-label">Session Length</p>
            <p id="session-length" className="digital-display">{session}</p>
            <div>
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
        </div>
    )
}