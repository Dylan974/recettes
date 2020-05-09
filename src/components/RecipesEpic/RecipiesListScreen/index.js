import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { fetchRecipes } from '../../../api/recipes';

const RecipesListScreen = ({ navigation }) => {
    useEffect(() => {
        fetchRecipes();
    }, []);
    return (
        <View style={styles.container}>
            <Text>RecipesListScreen</Text>
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
    }
});

export default RecipesListScreen;