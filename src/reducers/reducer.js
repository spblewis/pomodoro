
const initialState = {
    session: 25,
    breakLength: 5,
    timeLeft: 25 * 60,
    running: false
};

const START = 'START';
const STOP = 'STOP';
const TICK = 'TICK';
const RESET = 'RESET';

const SESSION_INCREMENT = 'SESSION_INCREMENT';
const SESSION_DECREMENT = 'SESSION_DECREMENT';

const BREAK_INCREMENT = 'BREAK_INCREMENT';
const BREAK_DECREMENT = 'BREAK_DECREMENT';

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
        case SESSION_INCREMENT: {
            const session = state.session + 1;
            return Object.assign({}, state, {
                session: Math.min(session, 60),
                timeLeft: session * 60,
                running: false
            })};
        case SESSION_DECREMENT: {
            const session = state.session - 1;
            return Object.assign({}, state, {
                session: Math.max(session, 1),
                timeLeft: session * 60,
                running: false
            })};
        case BREAK_INCREMENT: {
            const breakLength = state.breakLength + 1;
            return Object.assign({}, state, {
                breakLength: Math.min(breakLength, 60),
                timeLeft: state.session * 60,
                running: false
            })};
        case BREAK_DECREMENT: {
            const breakLength = state.breakLength - 1;
            return Object.assign({}, state, {
                breakLength: Math.max(breakLength, 1),
                timeLeft: state.session * 60,
                running: false
            })};
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

export const sessionDecrement = () => ( { type: SESSION_DECREMENT } );

export const breakIncrement = () => ( { type: BREAK_INCREMENT } );

export const breakDecrement = () => ( { type: BREAK_DECREMENT } );