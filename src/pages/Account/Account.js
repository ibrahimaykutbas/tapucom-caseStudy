import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import styles from './Account.style';

import Button from '../../components/button/Button';

import Dropdown from '../../components/dropdown/Dropdown';

import {Formik} from 'formik';

import {Base64} from 'js-base64';

const initialFormValues = {
  locale: '',
};

const Account = ({navigation, route}) => {
  const {values} = route.params;
  const [locale, setLocale] = useState(values.locale);

  useEffect(() => {
    setLocale(values.locale);
  }, [values]);

  const handlePage = () => {
    navigation.goBack();
  };

  const handleFormSubmit = values => {};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account</Text>
      <View style={styles.innerContainer}>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <Text style={styles.user}>İbrahim Aykut BAŞ</Text>
            <Text style={styles.data}>E-mail: {values.mail}</Text>
            <Text style={styles.data}>
              Password: {Base64.encode(values.password)}
            </Text>
            <Text style={styles.data}>Current locale: {values.locale}</Text>
          </View>
          <Formik initialValues={locale} onSubmit={handleFormSubmit}>
            {({handleChange, handleSubmit, values}) => (
              <Dropdown onType={handleChange('locale')} value={locale} />
            )}
          </Formik>
        </View>
        <Button title="Log Out" theme="logOut" onPress={() => handlePage()} />
      </View>
    </View>
  );
};

export default Account;
