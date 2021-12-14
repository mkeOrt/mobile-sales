import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, RefreshControl, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements';
import { useGetProducts } from '../hooks/productsHook';

const ProductsList = () => {
  const { products, getProducts, loadingProduct } = useGetProducts();

  return (
    <FlatList
      refreshControl={<RefreshControl refreshing={loadingProduct} onRefresh={getProducts} />}
      data={products}
      keyExtractor={(item, id) => id}
      renderItem={({ item }) => (
        <ListItem bottomDivider={false}>
          <View style={tw.style('rounded', { overflow: 'hidden' })}>
            <Avatar source={{ uri: 'https://picsum.photos/200/200' }} size="medium" />
          </View>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>${item.price}</ListItem.Subtitle>
          </ListItem.Content>
          <Icon name="barcode" type="font-awesome" />
        </ListItem>
      )}
    />
  )
}

export default ProductsList;
