import axios from 'axios';
import { fetchRecipesAction, fetchSelectedRecipeAction } from '../../redux/actions';

const ENDPOINT_BASE = 'https://api.spoonacular.com/recipes';
const ENDPOINT_RECIPES = ENDPOINT_BASE + '/search';

const apiKey = '15fce38f989846d8af7d3b157b40f464';
const MAX_PER_PAGE = 30;

export const fetchRecipes = async (dispatch, query) => {
    try {
        const response = await axios.get(ENDPOINT_RECIPES, {
            params: {
                apiKey,
                number: MAX_PER_PAGE,
            }
        });
        dispatch(fetchRecipesAction(response.data.results));
    } catch (e) {
        console.error('error fetch recipes', e);
    }
};

export const fetchSelectedRecipe = async (dispatch, recipeId) => {
    console.log('display endpoint', `${ENDPOINT_BASE}/${recipeId}/information`);
    try {
        const response = await axios.get(`${ENDPOINT_BASE}/${recipeId}/information`, {
            params: {
                apiKey,
            }
        });
        console.log('fetch selected recipe', response.data);
        dispatch(fetchSelectedRecipeAction(response.data));
    } catch (e) {
        console.error('error fetch selected recipe', e);
    }
};