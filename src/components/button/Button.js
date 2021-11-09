import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './Button.style';

const Button = ({title, theme, onPress, disable}) => {
  return (
    <TouchableOpacity
      style={styles[theme].buttonContainer}
      onPress={onPress}
      disabled={disable}>
      <Text style={styles[theme].text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
