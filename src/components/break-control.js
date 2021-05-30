import React from 'react';
import { breakIncrement, breakDecrement } from './../reducers/reducer.js';
import store from './../store.js';

export function BreakControl({ breakLength }) {

    const incrementBreak = () => {
        store.dispatch(breakIncrement());
    }

    const decrementBreak = () => {
        store.dispatch(breakDecrement());
    }

    return (
        <div>
            <p id="break-label">Break Length</p>
            <p id="break-length">{breakLength}</p>
            <button 
                id="break-increment"
                onClick={incrementBreak}
                >
                    Break++
                </button>
            <button 
                id="break-decrement"
                onClick={decrementBreak}
                >
                    Break--
                </button>
        </div>
    )
}