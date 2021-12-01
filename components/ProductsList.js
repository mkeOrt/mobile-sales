import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';

const ProductsList = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item, id) => id}
      renderItem={({ item }) => (
        <ListItem bottomDivider={false}>
          <View style={tw.style('rounded', { overflow: 'hidden' })}>
            <Avatar source={{ uri: item.picture.large }} />
          </View>
          <ListItem.Content>
            <ListItem.Title>{item.name.first} {item.name.last}</ListItem.Title>
            <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      )}
    />
  )
}

export default ProductsList;
