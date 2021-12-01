import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';

const ProductsList = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ListItem bottomDivider>
          <View style={tw.style('rounded', { overflow: 'hidden' })}>
            <Avatar source={{ uri: item.picture }} />
          </View>
          <ListItem.Content>
            <ListItem.Title>{ item.name }</ListItem.Title>
            <ListItem.Subtitle>${ item.price }</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      )}
    />

  )
}

export default ProductsList;
