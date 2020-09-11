//initially the basket is completely empty
export const initialState = {
  basket: []
};

//This is the listener present in every component
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    default:
      return state;
  }
};

export default reducer;
