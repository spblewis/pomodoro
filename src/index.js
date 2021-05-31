import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { Timer } from './components/timer.js';
import { SessionControl } from './components/session-control.js';
import { BreakControl } from './components/break-control.js';
import store from './store.js'


function Pomodoro({ appState }) {

        return (
        
            <div id="pomodoro">
                <div id="stem"></div>
                
                <div id="leaf-1" class="leaves"></div>
                <div id="leaf-2" class="leaves"></div>
                <div id="leaf-3" class="leaves"></div>
                <div id="display-grid">
                <Timer appState={appState}/>
                <SessionControl 
                    session={appState.session}
                />
                <BreakControl 
                    breakLength={appState.breakLength}
                />
            </div></div>
        
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