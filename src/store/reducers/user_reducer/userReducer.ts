import { IUser } from '../../../models/IUser';
import { UserAction, UserActionType, UserState } from './type';

const defaultState = {
  modalIn: false, modalUp: false,
  user: {} as IUser, modalVisible: false,
  isAuth: false
};


export function userReducer(state: UserState = defaultState, action: UserAction) {
  switch (action.type) {
    case UserActionType.MODAL_IN:
      return { ...state, modalIn: action.payload };
    case UserActionType.MODAL_UP:
      return { ...state, modalUp: action.payload };
    case UserActionType.MODAL_VISIBLE:
      return { ...state, modalVisible: action.payload };
    case UserActionType.SET_USER:
      return { ...state, user: action.payload };
    case UserActionType.IS_AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
}
