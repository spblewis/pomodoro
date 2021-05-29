
const initialState = {
    session: 25,
    break: 5,
    timeLeft: 25 * 60,
    running: false
};

const START = 'START';
const STOP = 'STOP';
const TICK = 'TICK';
const RESET = 'RESET';

const appReducer = (state = initialState, action) => { 

    switch(action.type) {
        case START:
            return Object.assign({}, state, {
                running: true,
            });
        case STOP:
            return Object.assign({}, state, {
                running: false,
            });
        case TICK:
            return Object.assign({}, state, {
                timeLeft: state.timeLeft - 1,
            });
        case RESET:
            return initialState;
        default:
            return state;
    }
};

export default appReducer;

export const start = () => ( { type: START } );

export const tick = () => ( { type: TICK } );

export const stop = () => ( { type: STOP } );

export const reset = () => ( { type: RESET } );

