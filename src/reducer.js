//initially the basket is completely empty
export const initialState = {
  basket: [],
  user: null
};

//Selector
export const getBasketTotal = basket =>
  basket?.reduce((amount, item) => parseInt(item.price) + amount, 0);

//This is the listener present in every component
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item]
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: []
      };
    case "REMOVE_FROM_BASKET":
      //finding index of that item
      const index = state.basket.findIndex(
        basketItem => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("NO ITEM OF THIS ID FOUND");
      }
      return {
        ...state,
        basket: newBasket
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export default reducer;
