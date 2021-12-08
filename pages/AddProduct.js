import React from 'react';
import { TouchableNativeFeedback, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'tailwind-react-native-classnames';

const AddProduct = () => {
  return (
    <SafeAreaView style={tw`pt-5 px-3`}>
      <Input label="Nombre" placeholder="Nombre del producto" />
      <Input label="Precio" placeholder="Precio del producto" keyboardType="numeric" />
      <Input label="Cantidad" placeholder="Cantidad del producto" keyboardType="numeric" />
      <Button title="Agregar código de barras" type="clear" onPress={() => console.log('Test')}/>
    </SafeAreaView>
  );
};

export default AddProduct;
