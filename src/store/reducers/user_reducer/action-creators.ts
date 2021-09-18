import { UserActionType } from './type';
import { AppDispatch } from '../../index';


export interface IUserReg {
  name: string,
  email: string,
  password: string
}

export type ResUser = {
  errors?: any,
  message: string,
  status?: string,
  user?: IUserReg
}

const host: string = window.location.origin;

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
  },

  registration: (user: IUserReg) => async (dispatch: AppDispatch) => {

    try {


      const response = await fetch(host + '/api/user',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(user)
        });

      const json = await response.json();
      alert(json.message);
      if (json.message === 'User was created') {

        dispatch({ type: UserActionType.MODAL_IN, payload: true });
        dispatch({ type: UserActionType.MODAL_UP, payload: false });
        dispatch({ type: UserActionType.MODAL_VISIBLE, payload: true });
      }

    } catch (e) {
      alert(e);
    }

  }


};
