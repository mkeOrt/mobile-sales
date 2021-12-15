import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import AddProductImage from './pages/AddProductImage';

const Router = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="AddProductImage" component={AddProductImage} />
    </Stack.Navigator>
  );
}

export default Router;