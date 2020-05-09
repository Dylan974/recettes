const defaultState = [];
import { ADD_RECIPES } from '../actionTypes';

export const recipesList = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_RECIPES:
            return action.payload.data;
        default:
            return state;
    }
}