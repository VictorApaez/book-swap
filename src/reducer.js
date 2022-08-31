export const initialState = {
  basket: [],
  user: null,
};
// state is the current state
const reducer = (state, action) => {
  switch (action.type) {
    // if the case is 'ADD_TO_BASKET then return
    case "ADD_TO_BASKET":
      return {
        // return current state example: {basket: [{},{},{}]}
        ...state,
        //returns current state with new product added to the end of the array
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      console.log(index);
      let newBasket = [...state.basket];
      newBasket.splice(index, 1);
      // if (index >= 0) {
      //     newBasket.splice(index,1);
      //     console.log(newBasket)
      // }
      // else {
      //     console.log("cant remove product")
      // }

      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return { state };
  }
};

export default reducer;
