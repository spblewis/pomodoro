const currentTime = new Date(Date.now());

const initialState = {
    session: 25,
    break: 5,
    timeleft: '25:00',
    currentTime: (currentTime.getHours() + ':' + 
                  currentTime.getMinutes() + ':' +
                  currentTime.getSeconds()), 
    running: false
};

const START = 'START';
const STOP = 'STOP';

const appReducer = (state = initialState, action) => { 

    switch(action.type) {
        case START:
            return Object.assign({}, state, {
                running: true
            });
        case STOP:
            return Object.assign({}, state, {
                running: false
            });
        default:
            return state;
    }
};

export default appReducer;