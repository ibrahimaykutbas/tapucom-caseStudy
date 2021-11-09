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
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
  },
  user: {
    color: '#000000',
    fontSize: 36,
    fontWeight: '700',
    /*   marginTop: 30, */
    marginBottom: 32,
    fontFamily: 'Nunito Sans',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 32,
  },
  data: {
    lineHeight: 28.89,
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  content: {},
  contentHeader: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#64738C',
    paddingBottom: 20,
    marginBottom: 23,
  },
});
