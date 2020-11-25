import { SELECT_SYMBOL } from "../actionTypes";

const initialState = {};

export default function symbolSelection(state = initialState, action) {
    switch (action.type) {
        case SELECT_SYMBOL:
            state = {
                ...state,
                symbol: action.payload.symbol
            }
            break;
        default:
            break;
    }
    return state;
}