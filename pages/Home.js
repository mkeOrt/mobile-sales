import React, { Fragment, useEffect } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FAB, Icon } from 'react-native-elements';
import ProductsList from '../components/ProductsList';
import tw from 'tailwind-react-native-classnames';
import { useGetProducts } from '../hooks/productsHook';
import Skeleton from '../components/Skeleton';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { setProductToCreateImage } from '../slices/productsSlice';

const Home = ({ navigation }) => {
  const { getProducts, loadingProduct } = useGetProducts();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getProducts();
    });
    return unsubscribe;
  }, [navigation]);

  const goToCreateProductPage = () => {
    dispatch(setProductToCreateImage(null));
    navigation.push('AddProduct');
  };

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
              onPress={goToCreateProductPage}
            />
          </Fragment>
      }
    </SafeAreaView>
  );
}

export default Home;