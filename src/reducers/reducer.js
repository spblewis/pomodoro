
//Some global time variables to work with.  Not sure I'll use this method in the end.
const currentTime = new Date(Date.now());
const padTime = (num) => String(num).padStart(2, '0');
const hours = padTime(currentTime.getHours() % 12 || 12);
const minutes = padTime(currentTime.getMinutes());
const seconds = padTime(currentTime.getSeconds());


const initialState = {
    session: 25,
    break: 5,
    timeleft: '25:00',
    currentTime: `${hours}:${minutes}:${seconds}`,
    endTime: null,
    running: false
};

const START = 'START';
const STOP = 'STOP';

const appReducer = (state = initialState, action) => { 

    switch(action.type) {
        case START:
            return Object.assign({}, state, {
                running: true,
                endTime: currentTime + state.session * 60000,
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