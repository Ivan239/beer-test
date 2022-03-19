import { ADD_BEER, DELETE_BEER, LOAD_FAV } from "./types";

export default function reducer(state, action) {
    switch (action.type) {
        case LOAD_FAV:
            return action.payload;
        case ADD_BEER:
            if (!state) {
                return [action.payload]
            }
            return [...state, action.payload];
        case DELETE_BEER:
            if (!state) {
                return state
            }
            return state.filter(beer => beer.id !== action.payload);
        default: return state || [];
    }
}