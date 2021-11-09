import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#FEFEFE',
  },
  header: {
    marginTop: 92,
    fontSize: 32,
    color: '#121212',
    marginBottom: 27,
    fontWeight: '600',
    fontFamily: 'Nunito Sans',
  },
  label: {
    color: '#77869E',
    fontSize: 12,
    fontFamily: 'Nunito Sans',
    paddingLeft: 3,
  },
  locale: {
    color: '#64738C',
    fontSize: 12,
    fontFamily: 'Nunito Sans',
  },
  pickerContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#64738C',
    marginBottom: 53.5,
  },
  pickerText: {
    color: '#121212',
    fontFamily: 'Nunito Sans',
  },
  pickerDisable: {
    color: '#64738C',
  },
});
