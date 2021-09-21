import { IUser } from '../../../models/IUser';
import { ChangeEventAction, EventActionType, SetEventAction, SetGuestAction } from './type';
import { IEvent } from '../../../models/IEvent';
import { AppDispatch } from '../../index';
import { IEventRedux } from '../../../models/IEventRedux';

const host: string = window.location.origin;
export const EventActionCreators = {

  setGuests: (payload: IUser[]): SetGuestAction => ({ type: EventActionType.SET_GUESTS, payload }),
  setEvents: (payload: IEventRedux[]): SetEventAction => ({ type: EventActionType.SET_EVENTS, payload }),
  changeEvents: (): ChangeEventAction => ({ type: EventActionType.CHANGE_EVENT}),

  getEvents: (email: string) => async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response = await fetch(host + '/api/event', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ email: email })
      });
      const json = await response.json();
      dispatch(EventActionCreators.setEvents(json.events));
      // dispatch({type:EventActionType.SET_EVENTS,payload:json})

    } catch (e) {
      console.log(e);
    }

  }


};
