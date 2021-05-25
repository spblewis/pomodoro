import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';





class Pomodoro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: 25,
            break: 5,
            timeleft: "60:00", 
            running: false
        };
    }


    render() {

        return (
        
            <div>
                <div id="timer-label">Session</div>
                <div id="time-left">{this.state.timeleft}</div>
                <button id="start_stop">{this.state.running ? 'Stop' : 'Start'}</button>
                <button id="reset">Reset</button>
                <div>
                    <p id="break-label">Break Length</p>
                    <p id="break-length">{this.state.break}</p>
                    <button id="break-increment">Break++</button>
                    <button id="break-decrement">Break--</button>
                </div>
                <div>
                    <p id="session-label">Session Length</p>
                    <p id="session-length">{this.state.session}</p>
                    <button id="session-increment">Session++</button>
                    <button id="session-decrement">Session--</button>
                </div>
            </div>
        
        );

    }
}

ReactDOM.render(
    <Pomodoro />,
    document.getElementById('root')
);