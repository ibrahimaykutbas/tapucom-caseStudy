import React from 'react';
import {View, Text, ScrollView} from 'react-native';

import styles from './SignUp.style';

import TextInput from '../../components/textInput/textInput';
import Button from '../../components/button/Button';
import Dropdown from '../../components/dropdown/Dropdown';

import {Formik} from 'formik';

const initialFormValues = {
  mail: '',
  password: '',
  locale: '',
};

const SignUp = ({navigation}) => {
  const handleFormSubmit = values => {
    navigation.navigate('AccountPage', {values});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Account</Text>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({handleChange, handleSubmit, values}) => (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.label}>
              {values.mail.length > 0 ? 'E-Posta' : ''}
            </Text>
            <TextInput
              placeholder="E-mail"
              value={values.mail}
              onType={handleChange('mail')}
            />
            <Text style={styles.label}>
              {values.password.length > 0 ? 'Parola' : ''}
            </Text>
            <TextInput
              placeholder="Password"
              value={values.password}
              onType={handleChange('password')}
              isSecure={true}
            />
            <Dropdown onType={handleChange('locale')} value={values.locale} />
            <Button
              title="Sign Up"
              theme={
                values.mail.length > 0 &&
                values.password.length > 0 &&
                values.locale.length > 0 &&
                values.locale !== 'disable'
                  ? 'secondary'
                  : 'primary'
              }
              disable={
                values.mail.length > 0 &&
                values.password.length > 0 &&
                values.locale.length > 0 &&
                values.locale !== 'disable'
                  ? false
                  : true
              }
              onPress={handleSubmit}
            />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
