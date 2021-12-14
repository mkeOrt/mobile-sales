import React, { useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FAB, Icon } from 'react-native-elements';
import ProductsList from '../components/ProductsList';
import tw from 'tailwind-react-native-classnames';
import { useGetProducts } from '../hooks/products';

const Home = ({ navigation }) => {
  const { products, getProducts } = useGetProducts();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProducts();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      <View style={tw`android:mt-10 pl-3`}>
        <Text style={tw`text-3xl font-medium`}>Productos</Text>
      </View>
      <ProductsList products={products} onRefresh={getProducts} />
      <FAB
        placement="right"
        color="dodgerblue"
        icon={<Icon color="white" type="antdesign" name="plus" />}
        onPress={() => navigation.push('AddProduct')}
      />
    </SafeAreaView>
  );
}

export default Home;