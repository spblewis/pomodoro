
const initialState = {
    session: 25,
    working: true,
    breakLength: 5,
    timeLeft: 25 * 60,
    running: false,
    beeping: false,
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
            if (state.timeLeft === 0) {
                return Object.assign({}, state, {
                    working: !state.working,
                    timeLeft: (state.working ? 
                        state.breakLength * 60 : 
                        state.session * 60),
                    beeping: true,
                })
            }
            return Object.assign({}, state, {
                timeLeft: state.timeLeft - 1,
            });

        case SESSION_INCREMENT: {
            const session = Math.min(state.session + 1, 60);
            return Object.assign({}, state, {
                session: session,
                timeLeft: session * 60,
                running: false
            })};

        case SESSION_DECREMENT: {
            const session = Math.max(state.session - 1, 1);
            return Object.assign({}, state, {
                session: session,
                timeLeft: session * 60,
                running: false
            })};

        case BREAK_INCREMENT: {
            const breakLength = Math.min(state.breakLength + 1, 60);
            return Object.assign({}, state, {
                breakLength: breakLength,
                timeLeft: state.session * 60,
                running: false
            })};
        case BREAK_DECREMENT: {
            const breakLength = Math.max(state.breakLength - 1, 1);
            return Object.assign({}, state, {
                breakLength: breakLength,
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