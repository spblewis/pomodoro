import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { Timer } from './components/timer.js';
import store from './store.js'


function Pomodoro({ appState }) {





        return (
        
            <div>
                <Timer appState={appState}/>
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


const mapDispatchToProps = (dispatch) => ({
  
});

const App = connect(mapStateToProps, mapDispatchToProps)(Pomodoro);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);