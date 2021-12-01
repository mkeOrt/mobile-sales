import React, { useState, useEffect, Fragment } from 'react';
import { Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Camera } from 'expo-camera';
import { FAB, Icon } from 'react-native-elements';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [isUsingCamera, setIsUsingCamera] = useState(false);
  const [code, setCode] = useState(null);

  const onBarCodeScanned = ({ data }) => {
    setIsUsingCamera(false);
    setCode(data)
  }

  const openCamera = () => {
    setIsUsingCamera(true);
  }

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={tw`h-full`, !isUsingCamera ? [{flex: 1, justifyContent: 'center', alignItems: 'center'}]: ''}>
      {isUsingCamera &&
        <View style={tw`h-1/2 m-5 mt-10`}>
          <View style={tw`h-full`}>
            <Camera type="back" style={tw`h-full w-full`} onBarCodeScanned={onBarCodeScanned} />
          </View>
        </View>
      }
      {!isUsingCamera && <Text>{code ? code : 'Código no escaneado'}</Text>}
      {!isUsingCamera &&
        <FAB
          color="dodgerblue"
          icon={<Icon type="antdesign" name="camera" color="white" />}
          placement="right"
          onPress={openCamera}
        />
      }
    </View>
  );
}