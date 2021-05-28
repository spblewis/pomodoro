import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import reducer from './reducers/reducer';
const store = createStore(reducer);


function Pomodoro({ appState }) {

        return (
        
            <div>
                <div id="timer-label">Session</div>
                <div id="time-left">{appState.currentTime}</div>

                {/* heres a dummy div to temporarily display endTime.  
                Remove when endTime is confirmed to function */}
                <div id="end-time">{appState.endTime}</div>


                <button id="start_stop">{appState.running ? 'Stop' : 'Start'}</button>
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

const mapDispatchToProps = (dispatch) => ({
  /* to do */
});

const App = connect(mapStateToProps, mapDispatchToProps)(Pomodoro);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);