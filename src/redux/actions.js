import { SELECT_SYMBOL } from "./actionTypes";

let nextTodoId = 0;

export const selectSymbol = symbol => ({
    type: SELECT_SYMBOL,
    payload: {
        symbol: symbol
    }
});