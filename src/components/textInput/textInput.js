import React, {useState} from 'react';
import {View, TextInput} from 'react-native';

import styles from './textInput.style';

const textInput = ({placeholder, value, onType, isSecure}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#64738C"
        style={isFocused > 0 ? [styles.input, styles.border] : styles.input}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default textInput;
