import React, { useState } from 'react';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';
import { useGetProducts } from '../hooks/products';
import { supabase } from '../lib/supabase'

const AddProduct = ({ navigation }) => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    quantity: 0,
  });

  const createProduct = async () => {
    await supabase.from('products').insert(product);
    navigation.goBack();
  }

  return (
    <SafeAreaView style={tw`pt-5 px-3 bg-white h-full`}>
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
      <Button
        title="Guardar"
        onPress={createProduct}
      />
    </SafeAreaView>
  );
};

export default AddProduct;
