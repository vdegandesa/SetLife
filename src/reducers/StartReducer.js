import * as types from '../constants/actionTypes';

const initialState = {
    setLife: true 
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
        case types.SET_LIFE:
            return {
                ...state,
                scene: action.scene,
            };
        default:
            return state;
    }
}