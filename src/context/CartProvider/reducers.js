export default (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const {item} = action.payload;
      const addedItem = state.cartList.find(product => product.id === item.id);

      if (addedItem) {
        return {
          ...state,
          cartList: state.cartList.map(product =>
            product.id === item.id
              ? {...product, quantity: product.quantity + 1}
              : product,
          ),
          totalPrice: state.totalPrice + item.price,
        };
      }
      return {
        ...state,
        cartList: [...state.cartList, {...item, quantity: 1}],
        totalPrice: state.totalPrice + item.price,
      };

    case 'REMOVE_PRODUCT':
      const {product} = action.payload;
      const filtered = state.cartList.filter(item => item.id !== product.id);
      const TotalPrice = (state.totalPrice -= product.quantity * product.price);

      return {...state, cartList: filtered, totalPrice: TotalPrice};

    default:
      return state;
  }
};
