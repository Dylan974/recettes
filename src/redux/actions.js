import { ADD_RECIPES, SELECTED_RECIPE } from './actionTypes';

export const fetchRecipesAction = (data) => ({
    type: ADD_RECIPES,
    payload: {
        data,
    }
});

export const fetchSelectedRecipeAction = (data) => ({
    type: SELECTED_RECIPE,
    payload: {
        data
    }
})