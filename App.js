import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './store'
import 'react-native-url-polyfill/auto';
import 'react-native-gesture-handler';
import Router from './Router';


export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer >
          <Router/>
        </NavigationContainer>
        <StatusBar style="auto" />
      </SafeAreaProvider >
    </Provider>
  );
}