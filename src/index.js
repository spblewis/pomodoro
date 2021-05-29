import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { Timer } from './components/timer.js';
import { SessionControl } from './components/session-control.js';
import store from './store.js'


function Pomodoro({ appState }) {

        return (
        
            <div>
                <Timer appState={appState}/>
                <SessionControl 
                    session={appState.session}
                />
                <div>
                    <p id="break-label">Break Length</p>
                    <p id="break-length">{appState.break}</p>
                    <button id="break-increment">Break++</button>
                    <button id="break-decrement">Break--</button>
                </div>
            </div>
        
        );

}

const mapStateToProps = (state) => ({
    appState: state,
});

const mapDispatchToProps = (dispatch) => ({
  
});

const App = connect(mapStateToProps, mapDispatchToProps)(Pomodoro);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);