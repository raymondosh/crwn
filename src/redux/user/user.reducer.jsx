import { UserActionsTypes } from "./user.types";

// this lets redux knows that should be a default value before it can update
const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UserActionsTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};

export default userReducer;
