import { UserActionTypes } from "./user.types";
// always give a defualt state, incase if we don't have anything in the state object that comes from the
// action, then it will allocate it to INITIAL_STATE.
const INITIAL_STATE = {
  currentUser: null
};
//action has payload and type
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        //spread it out and change the variable inside the state object
        ...state,
        currentUser: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
