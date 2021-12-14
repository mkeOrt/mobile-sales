import React, { Fragment, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FAB, Icon } from 'react-native-elements';
import ProductsList from '../components/ProductsList';
import tw from 'tailwind-react-native-classnames';
import { useGetProducts } from '../hooks/productsHook';
import Skeleton from '../components/Skeleton';
import { FlatList } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const { products, getProducts, loadingProduct } = useGetProducts();

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
      {
        loadingProduct ?
          <FlatList
            data={Array(8).fill('')}
            renderItem={() => <Skeleton />}
            keyExtractor={(item, index) => index}
          /> :
          <Fragment>
            <ProductsList />
            <FAB
              placement="right"
              color="dodgerblue"
              icon={<Icon color="white" type="antdesign" name="plus" />}
              onPress={() => navigation.push('AddProduct')}
            />
          </Fragment>
      }
    </SafeAreaView>
  );
}

export default Home;