import {StyleSheet} from 'react-native';

const baseStyle = StyleSheet.create({
  buttonContainer: {
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    fontSize: 14,
    letterSpacing: 0.8,
    fontFamily: 'Nunito Sans',
  },
});

export default {
  primary: StyleSheet.create({
    buttonContainer: {
      ...baseStyle.buttonContainer,
      backgroundColor: '#BBC3CF',
    },
    text: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  secondary: StyleSheet.create({
    buttonContainer: {
      ...baseStyle.buttonContainer,
      backgroundColor: '#E82223',
    },
    text: {
      ...baseStyle.text,
      color: 'white',
    },
  }),
  logOut: StyleSheet.create({
    buttonContainer: {
      ...baseStyle.buttonContainer,
      backgroundColor: 'white',
      borderColor: '#E82223',
      borderWidth: 1,
      marginBottom: 20,
    },
    text: {
      ...baseStyle.text,
      color: '#E82223',
      fontWeight: 'bold',
      letterSpacing: 0.8,
      fontFamily: 'Nunito Sans',
    },
  }),
};
