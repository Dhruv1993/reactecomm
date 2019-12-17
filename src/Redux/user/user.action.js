
import { UserActionTypes } from './user.types';
// function that takes in an object , it could be anything

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

