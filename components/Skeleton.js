import React from 'react'
import { View } from "react-native";
import tw from 'tailwind-react-native-classnames';

const Skeleton = () => {
  return (
    <View style={tw`p-4 flex flex-row`}>
      <View style={tw`bg-gray-200 w-12 h-12 rounded`}></View>
      <View style={tw`w-full ml-4 mt-2`}>
        <View style={tw`h-3 w-1/3 bg-gray-200 mb-1`}></View>
        <View style={tw`h-3 w-1/2 bg-gray-200`}></View>
      </View>
    </View>
  );
};

export default Skeleton;
