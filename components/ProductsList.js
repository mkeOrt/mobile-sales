import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, RefreshControl, View } from 'react-native'
import { Avatar, Icon, ListItem } from 'react-native-elements';
import { useGetProducts } from '../hooks/productsHook';
import noImage from '../assets/no-image.png'

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
            <Avatar source={noImage} size="medium" />
          </View>
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>${item.price}</ListItem.Subtitle>
          </ListItem.Content>
          <Icon name="barcode" type="antdesign" />
        </ListItem>
      )}
    />
  )
}

export default ProductsList;
