import { CartActionsTypes } from "./cart.types";
import { addItemToCart, removeItemFromCart } from "./cart.utils";

// this lets redux knows that should be a default value before it can update
const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CartActionsTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case CartActionsTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };
    case CartActionsTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };
    case CartActionsTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== payload.id
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
