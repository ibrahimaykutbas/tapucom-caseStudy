import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  detailContainer: {
    flex: 1,
  },
  cartList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: '#BBC3CF',
    paddingVertical: 10,
  },
  product: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
  remove: {
    color: 'red',
    fontSize: 14,
    fontWeight: '400',
  },
  detailHeaderText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 39.25,
    marginBottom: 16,
    fontFamily: 'Nunito Sans',
  },
  total: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'Nunito Sans',
  },
  footer: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 30,
    fontFamily: 'Nunito Sans',
  },
});
