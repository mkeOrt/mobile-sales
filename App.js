import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux'
import store from './store'
import 'react-native-url-polyfill/auto';
import 'react-native-gesture-handler';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AddProduct" component={AddProduct} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaProvider >
    </Provider>
  );
}