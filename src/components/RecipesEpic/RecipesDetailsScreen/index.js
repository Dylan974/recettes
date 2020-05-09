import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { fetchSelectedRecipe } from '../../../api/recipes';
import { useDispatch } from 'react-redux';

const RecipesDetailsScreen = ({ route, navigation }) => {
    const { id } = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        fetchSelectedRecipe(dispatch, id);
    }, []);

    return (
        <View>
            <Text>RecipesDetailsScreen</Text>
            <Text>{id}</Text>
            <Button title='Retour' onPress={() => {
                navigation.goBack();
            }} />
        </View>
    );
}

export default RecipesDetailsScreen;