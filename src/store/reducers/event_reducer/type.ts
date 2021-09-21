import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';
import { IEventRedux } from '../../../models/IEventRedux';

export interface EventState {
  guests: IUser[],
  events: IEventRedux[],
  event:boolean
}

export enum EventActionType {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS',
  CHANGE_EVENT='CHANGE_EVENT'


}

export interface SetGuestAction {
  type: EventActionType.SET_GUESTS,
  payload: IUser[]

}

export interface SetEventAction {
  type: EventActionType.SET_EVENTS,
  payload: IEventRedux[]

}

export interface ChangeEventAction {
  type:EventActionType.CHANGE_EVENT
}

export type EventAction =
  SetEventAction | SetGuestAction
| ChangeEventAction