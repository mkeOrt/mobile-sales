import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, RefreshControl, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements';

const ProductsList = ({ products, onRefresh: fetchProducts }) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchProducts();
    setRefreshing(false);
  };

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      data={products}
      keyExtractor={(item, id) => id}
      renderItem={({ item }) => (
        <ListItem bottomDivider={false} bottomDivider>
          <View style={tw.style('rounded', { overflow: 'hidden' })}>
            <Avatar source={{ uri: 'https://picsum.photos/200/200' }} />
          </View>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>${item.price}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      )}
    />
  )
}

export default ProductsList;
