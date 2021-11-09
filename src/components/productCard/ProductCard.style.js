import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: '#FEFEFE',
  },
  productContainer: {
    flex: 1,
  },
  productCard: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#BBC3CF',
    marginBottom: 20,
  },
  content: {
    height: 100,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 72,
    height: 75.4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    marginRight: 15,
    borderWidth: 0.5,
    borderColor: '#BBC3CF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 10,
  },
  image: {
    resizeMode: 'contain',
  },
  info: {},
  headerText: {
    color: '#121212',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 3.7,
    fontFamily: 'Nunito Sans',
    marginRight: 65,
  },
  infoText: {
    color: '#64738C',
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'Nunito Sans',
  },
  icons: {
    marginTop: 13,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  starIcon: {
    marginRight: 5.63,
  },
  count: {
    color: '#121212',
    fontSize: 12,
    fontWeight: '400',
  },
  price: {
    color: '#121212',
    fontSize: 12,
    fontWeight: '400',
    marginRight: 50,
  },
  button: {
    flexDirection: 'row',
    marginLeft: 90,
    marginBottom: 16.39,
  },
  buttonText: {
    marginLeft: 11.33,
    fontSize: 12,
    color: '#E82223',
    fontWeight: '700',
  },
  detailContainer: {
    flex: 1,
  },
  detailHeaderText: {
    color: '#000000',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 39.25,
    marginBottom: 16,
  },
  total: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '400',
  },
  footer: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 30,
    marginBottom: 30,
  },
});
