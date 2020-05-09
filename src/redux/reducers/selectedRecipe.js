const defaultState = [];
import { SELECTED_RECIPE } from '../actionTypes';

export const selectedRecipe = (state = defaultState, action) => {
    switch (action.type) {
        case SELECTED_RECIPE:
            return action.payload.data;
        default:
            return state;
    }
}