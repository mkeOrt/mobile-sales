import React from 'react'
import { SafeAreaView, Text, StatusBar as SB, StyleSheet, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FAB, Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames'
import ProductsList from './components/ProductsList';

const products = [
  {
    id: 1,
    name: 'Coca',
    price: 14,
    picture: 'https://randomuser.me/api/portraits/women/60.jpg'
  },
  {
    id: 2,
    name: 'Pepsi',
    price: 12,
    picture: 'https://randomuser.me/api/portraits/women/69.jpg'
  },
];

export default function App() {
  return (
    <SafeAreaView style={tw.style('h-full', styles.container)}>
      <ProductsList products={products} />
      <FAB
        placement="right"
        color="dodgerblue"
        icon={<Icon color="white" type="antdesign" name="plus"/>}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? SB.currentHeight : 0,
  }
});