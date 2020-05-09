import React from 'react';
import { View, Text, Button } from 'react-native';

const RecipesDetailsScreen = ({ route, navigation }) => {
    const { id } = route.params;
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