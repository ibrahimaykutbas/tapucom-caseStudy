import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './ProductCard.style';

import StarIcon from '../../assets/svg/star.svg';
import ButtonIcon from '../../assets/svg/button.svg';
import ImageIcon from '../../assets/svg/image.svg';

const ProductCard = ({item, onPress}) => {
  return (
    <View style={styles.productCard}>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          {/* <Image style={styles.image} source={{uri: item.image}} /> */}
          <ImageIcon />
        </View>
        <View style={styles.info}>
          <Text
            style={styles.headerText}
            numberOfLines={1}
            ellipsizeMode="tail">
            {item.title}
          </Text>
          <Text style={styles.infoText}>{item.category}</Text>
          <View style={styles.icons}>
            <Text style={styles.price}>{item.price} TL</Text>
            <StarIcon style={styles.starIcon} />
            <Text style={styles.count}>{item.rating.rate} </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <ButtonIcon />
        <Text style={styles.buttonText}>SEPETE EKLE</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
