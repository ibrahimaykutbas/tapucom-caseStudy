import React from 'react';
import {View, FlatList, Image, ActivityIndicator} from 'react-native';

import {showMessage} from 'react-native-flash-message';

import {useDispatch} from 'react-redux';

import styles from './List.style';

import Config from 'react-native-config';

import useFetch from '../../hooks/useFetch/useFetch';

import Detail from '../Detail/Detail';

import ProductCard from '../../components/productCard/ProductCard';

const List = () => {
  const {data, loading, error} = useFetch(Config.API_PRODUCT_URL);

  const dispatch = useDispatch();

  const addToCart = item => {
    dispatch({type: 'ADD_PRODUCT', payload: {item}});
    showMessage({
      message: 'Ürün başarılı bir şekilde sepete eklendi.',
      type: 'success',
    });
  };

  const renderProduct = ({item}) => (
    <ProductCard item={item} onPress={() => addToCart(item)} />
  );

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.productContainer}>
        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={data}
          renderItem={renderProduct}
          ListFooterComponent={Detail}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default List;
