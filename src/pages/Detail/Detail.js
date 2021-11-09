import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

import {showMessage} from 'react-native-flash-message';

import styles from './Detail.style';

const Detail = () => {
  const cart = useSelector(item => item.cartList);
  const total = useSelector(item => item.totalPrice);

  const dispatch = useDispatch();

  const removeItem = product => {
    dispatch({type: 'REMOVE_PRODUCT', payload: {product}});
    showMessage({
      message: 'Ürün sepetten silindi.',
      type: 'danger',
    });
  };

  return (
    <View style={styles.detailContainer}>
      {cart.map(item => (
        <View style={styles.cartList}>
          <Text style={styles.product}>
            {item.title} - {item.quantity}
          </Text>
          <Text onPress={() => removeItem(item)} style={styles.remove}>
            X
          </Text>
        </View>
      ))}

      {cart.length > 0 && (
        <>
          <Text style={styles.detailHeaderText}>Ürünlerin Toplamı</Text>
          <Text style={styles.total}>Toplam: {total.toFixed(2)} TL</Text>
          <Text style={styles.total}>Vergiler + Kargo: 21,45 TL</Text>
          <Text style={styles.footer}>
            Genel Toplam: {(total + 21.45).toFixed(2)} TL
          </Text>
        </>
      )}
    </View>
  );
};

export default Detail;
