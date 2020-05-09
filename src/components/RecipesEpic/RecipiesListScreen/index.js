import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import { fetchRecipes } from '../../../api/recipes';
import { useSelector, useDispatch } from 'react-redux';
import { getRecipes } from '../../../redux/selectors';
import RecipeListItem from './recipeListItem';


const RecipesListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const recipes = useSelector(getRecipes);
    useEffect(() => {
        fetchRecipes(dispatch);
    }, []);

    const _renderItem = ({ item }) => {
        return <RecipeListItem item={item} />;
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={recipes}
                renderItem={_renderItem}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
            <Button onPress={() => {
                navigation.navigate('RecipeDetail');
            }} title='Voir Détails' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    separator: {
        height: 3,
        backgroundColor: 'grey',
    }
});

export default RecipesListScreen;