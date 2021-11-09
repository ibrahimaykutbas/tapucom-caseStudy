export default reducers = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const {values} = action.payload;
      const newList = [...state.userList, values];
      return {...state, userList: newList};

    default:
      return state;
  }
};
