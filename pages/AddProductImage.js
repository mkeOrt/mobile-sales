
import { Camera } from 'expo-camera';
import React from 'react'
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import { FAB, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import tw from 'tailwind-react-native-classnames';
import { useTakePhoto } from '../hooks/cameraHook';
import { setProductToCreateImage } from '../slices/productsSlice';

const AddProductImage = ({ navigation }) => {
  const { setCamera, hasPermission, takePicture } = useTakePhoto();
  const dispatch = useDispatch();

  const snap = async () => {
    let photo = await takePicture();
    dispatch(setProductToCreateImage(photo));
    navigation.goBack();
  };

  if (hasPermission === null) return <View />;
  if (hasPermission === false) return <Text>No access to camera</Text>;

  return (
    <SafeAreaView style={tw`h-full bg-white flex justify-around pb-10`}>
      <Camera
        style={tw.style('h-2/3 w-full', styles.container)}
        type={Camera.Constants.Type.back}
        ref={ref => setCamera(ref)}
      />
      <FAB
        icon={<Icon name="camera" type="antdesign" />}
        size='large'
        color='white'
        type='material'
        style={tw`-mt-8`}
        onPress={snap}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});

export default AddProductImage;
