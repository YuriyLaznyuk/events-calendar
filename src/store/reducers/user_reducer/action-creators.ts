import { UserActionType } from './type';
import { AppDispatch } from '../../index';
import { IUser } from '../../../models/IUser';
import { EventActionType } from '../event_reducer/type';


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

  registration: (user: IUser) => async (dispatch: AppDispatch): Promise<void> => {

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
      }

    } catch (e) {
      alert(e);
    }
  },

  login: (user: IUser) => async (dispatch: AppDispatch): Promise<void> => {
    try {

      const response = await fetch(host + '/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(user)

      });


      const event = await fetch(host + '/api/event', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ email: user.email })
      });

      const eventJson = await event.json();

      const json = await response.json();
      alert(json.message);
      if (json.message === 'success') {
        localStorage.setItem('token', json.token);
        dispatch({ type: UserActionType.IS_AUTH, payload: true });
        dispatch({ type: UserActionType.SET_USER, payload: json.user });

        dispatch({ type: UserActionType.MODAL_IN, payload: false });
        dispatch({ type: UserActionType.MODAL_VISIBLE, payload: false });
        dispatch({ type: EventActionType.SET_EVENTS, payload: eventJson.events });
      }

    } catch (e) {
      alert(e);

    }
  },

  logout: () => async (dispatch: AppDispatch) => {
    try {
      localStorage.removeItem('token');
      dispatch({ type: UserActionType.IS_AUTH, payload: false });
      dispatch({ type: UserActionType.SET_USER, payload: {} as IUser });
      dispatch({ type: EventActionType.SET_EVENTS, payload: [] });
    } catch (e) {
      console.log(e);
    }

  },

  auth: () => async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response = await fetch(host + '/api/auth', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      const json = await response.json();
      if (json.token) {
        dispatch({ type: UserActionType.SET_USER, payload: json.user });
        dispatch({ type: UserActionType.IS_AUTH, payload: true });
        localStorage.setItem('token', json.token);

      } else {
        dispatch({ type: UserActionType.IS_AUTH, payload: false });

      }

    } catch (e) {
      alert(e);
      localStorage.removeItem('token');
    }
  }

};



