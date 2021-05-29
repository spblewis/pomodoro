
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

const SESSION_INCREMENT = 'SESSION_INCREMENT';

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
        case SESSION_INCREMENT:
            const session = state.session + 1;
            return Object.assign({}, state, {
                session: session,
                timeLeft: session * 60,
                running: false
            })
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

export const sessionIncrement = () => ( { type: SESSION_INCREMENT } );