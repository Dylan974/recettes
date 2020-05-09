import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import store from './src/redux/store';
import RecipesListScreen from './src/components/RecipesEpic/RecipiesListScreen';
import RecipesDetailsScreen from './src/components/RecipesEpic/RecipesDetailsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Recipes List' component={RecipesListScreen} />
          <Stack.Screen name='Recipes Detail' component={RecipesDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
});
