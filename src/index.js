import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
const store = createStore(reducer, applyMiddleware(thunk));


function Pomodoro({ appState }) {

    useEffect(() => {
        let timer = null;
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
                store.dispatch(start()))
    }


        return (
        
            <div>
                <div id="timer-label">Session</div>
                <div id="time-left">{appState.timeLeft.toString()}</div>

                <div>{appState.running.toString()}</div>
                <button 
                    id="start_stop"
                    onClick={handleStartStop}
                >{appState.running ? 'Stop' : 'Start'}</button>
                <button id="reset">Reset</button>
                <div>
                    <p id="break-label">Break Length</p>
                    <p id="break-length">{appState.break}</p>
                    <button id="break-increment">Break++</button>
                    <button id="break-decrement">Break--</button>
                </div>
                <div>
                    <p id="session-label">Session Length</p>
                    <p id="session-length">{appState.session}</p>
                    <button id="session-increment">Session++</button>
                    <button id="session-decrement">Session--</button>
                </div>
            </div>
        
        );

}

const mapStateToProps = (state) => ({
    appState: state,
});

//dispatch actions.  probably these need their own file eventually?
const START = 'START';
const STOP = 'STOP';
const TICK = 'TICK';
//start timer

const start = () => ( { type: START } );
//tick action creator
const tick = () => ( { type: TICK } );

const stop = () => ( { type: STOP } );



const mapDispatchToProps = (dispatch) => ({
  
});

const App = connect(mapStateToProps, mapDispatchToProps)(Pomodoro);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);