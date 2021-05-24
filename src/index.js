import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Pomodoro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: 25,
            break: 5,
        };
    }


    render() {

        return <div>{this.state.session}</div>;

    }
}

ReactDOM.render(
    <Pomodoro />,
    document.getElementById('root')
);