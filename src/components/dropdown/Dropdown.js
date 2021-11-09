import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import styles from './Dropdown.style';

const dropdown = ({onType, value}) => {
  const [locale, setLocale] = useState(value);

  useEffect(() => {
    if (value !== 'disable') {
      setLocale(value);
    }
  }, [value]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Locale</Text>

      <View style={styles.pickerContainer}>
        <Picker selectedValue={locale} onValueChange={onType}>
          <Picker.Item
            label="Please select"
            value="disable"
            style={styles.pickerDisable}
          />
          <Picker.Item label="Türkçe" value="TR" style={styles.pickerText} />
          <Picker.Item
            label="İngilizce"
            value="ING"
            style={styles.pickerText}
          />
        </Picker>
      </View>
    </View>
  );
};

export default dropdown;
