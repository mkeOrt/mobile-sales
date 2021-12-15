import { Camera } from "expo-camera";
import { useEffect, useState } from "react";

export const useTakePhoto = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [camera, setCamera] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    return camera.takePictureAsync();
  }

  return {
    hasPermission,
    setCamera,
    takePicture,
  }
};
