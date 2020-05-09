import axios from 'axios';
import { fetchRecipesAction } from '../../redux/actions';

const ENDPOINT_RECIPES = 'https://api.spoonacular.com/recipes/search';
const apiKey = '15fce38f989846d8af7d3b157b40f464';
const MAX_PER_PAGE = 30;

export const fetchRecipes = async (dispatch, query) => {
    try {
        console.log('fetch recipes');
        const response = await axios.get(ENDPOINT_RECIPES, {
            params: {
                apiKey: apiKey,
                number: MAX_PER_PAGE,
            }
        });
        console.log('fetch recipes', response.data.results);
        dispatch(fetchRecipesAction(response.data.results));
    } catch (e) {
        console.error('error fetch recipes', e);
    }
};