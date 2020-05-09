import { ADD_RECIPES } from './actionTypes';

export const fetchRecipesAction = (data) => ({
    type: ADD_RECIPES,
    payload: {
        data,
    }
});