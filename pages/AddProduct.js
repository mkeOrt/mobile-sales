import React from 'react';
import { Platform, ToastAndroid, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/Avatar';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import noImage from '../assets/no-image.png';
import { useCreateProduct } from '../hooks/productsHook';

const AddProduct = ({ navigation }) => {
  const {
    product,
    setProduct,
    creatingProduct,
    createProduct: createProductHook,
  } = useCreateProduct();

  const createProduct = async () => {
    try {
      await createProductHook();
    } catch (error) {
      if (error.message === 'Invalid product') { // TODO Remove toast, it only works on android
        if (Platform.OS === 'android') ToastAndroid.show('Datos invalidos', ToastAndroid.SHORT);
        return;
      }
    }
    navigation.goBack();
  }

  return (
    <SafeAreaView style={tw`android:pt-5 ios:pt-5 pb-3 px-3 bg-white h-full justify-between flex`}>
      <View>
        <View style={tw.style('rounded mx-auto shadow-lg', { overflow: 'hidden' })}>
          <Avatar
            size="large"
            source={noImage}
            style={{ height: 150, width: 150 }}
            onPress={() => console.log('Cambiar imagen')}
          />
        </View>
        <Input
          label="Nombre"
          placeholder="Nombre del producto"
          value={product.name}
          onChange={e => setProduct(prev => ({ ...prev, name: e.nativeEvent.text }))}
        />
        <Input
          label="Precio"
          placeholder="Precio del producto"
          keyboardType="numeric"
          onChange={e => setProduct(prev => ({ ...prev, price: e.nativeEvent.text }))}
        />
        <Input
          label="Cantidad"
          placeholder="Cantidad del producto"
          keyboardType="numeric"
          onChange={e => setProduct(prev => ({ ...prev, quantity: e.nativeEvent.text }))}
        />
        <Button
          title="Agregar código de barras"
          type="clear"
          onPress={() => console.log('Test')}
        />
      </View>
      <Button
        title="Guardar"
        onPress={createProduct}
        loading={creatingProduct}
      />
    </SafeAreaView>
  );
};

export default AddProduct;
