import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const RecipesListScreen = ({ navigation }) => {
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