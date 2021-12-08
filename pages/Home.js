import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { FAB, Icon } from 'react-native-elements';
import ProductsList from '../components/ProductsList';
import tw from 'tailwind-react-native-classnames';
import { MY_NAME } from '@env'


const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch('https://randomuser.me/api/?results=20')
        .then(res => res.json());
      setProducts(data.results);
    })();
  }, []);

  return (
    <SafeAreaView style={tw`h-full bg-white`}>
      {/* <View style={tw`android:mt-10 pl-3`}>
        <Text style={tw`text-3xl font-medium`}>Productos</Text>
      </View> */}
      <ProductsList products={products} />
      <FAB
        placement="right"
        color="dodgerblue"
        icon={<Icon color="white" type="antdesign" name="plus" />}
        onPress={() => navigation.navigate('AddProduct')}
      />
    </SafeAreaView>
  );
}

export default Home;