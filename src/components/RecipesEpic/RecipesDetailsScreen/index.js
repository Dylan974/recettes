import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { fetchSelectedRecipe } from '../../../api/recipes';
import { useDispatch, useSelector } from 'react-redux';
import { getSelectedRecipe } from '../../../redux/selectors';


const RecipesDetailsScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const dispatch = useDispatch();

    const recipe = useSelector(getSelectedRecipe);
    console.log(recipe);

    useEffect(() => {
        fetchSelectedRecipe(dispatch, id);
    }, []);

    return (
        <View>
            <View style={styles.containerImage}>
                <Image source={{ uri: recipe.image }} resizeMode='cover' style={styles.image}></Image>
            </View>
            <Text style={styles.title}>{recipe.title}</Text>
            <ScrollView style={styles.containerIngredients}>
                {recipe.extendedIngredients.map(ing => {
                    return <Text style={styles.ing}>{ing.name}</Text>
                })}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    containerImage: {
        height: 200
    },
    Image: {
        height: 200
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        textAlign: 'center',
        marginVertical: 10
    },
    containerIngredients: {
        borderTopWidth: 1,
        borderTopColor: 'grey',
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },
    ing: {
        fontSize: 16
    }
});

export default RecipesDetailsScreen;