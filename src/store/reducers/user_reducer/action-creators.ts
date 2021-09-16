import { UserActionType } from './type';
import { AppDispatch } from '../../index';

export const UserActionCreators = {
  modalVisible: (payload: boolean) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: UserActionType.MODAL_IN, payload });
      dispatch({ type: UserActionType.MODAL_UP, payload });
      dispatch({ type: UserActionType.MODAL_VISIBLE, payload });
    } catch (e) {
      console.log(e);
    }
  },

  modalVisibleUp: (payload: boolean) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: UserActionType.MODAL_UP, payload });
      dispatch({ type: UserActionType.MODAL_VISIBLE, payload });
    } catch (e) {
      console.log(e);
    }
  },

  modalVisibleIn: (payload: boolean) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: UserActionType.MODAL_IN, payload });
      dispatch({ type: UserActionType.MODAL_VISIBLE, payload });
    } catch (e) {
      console.log(e);
    }
  }


};
