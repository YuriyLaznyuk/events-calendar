import { IUser } from '../../../models/IUser';
import { IEvent } from '../../../models/IEvent';

export interface EventState {
  guests: IUser[],
  events: IEvent[]
}

export enum EventActionType {
  SET_GUESTS = 'SET_GUESTS',
  SET_EVENTS = 'SET_EVENTS'

}

export interface SetGuestAction {
  type: EventActionType.SET_GUESTS,
  payload: IUser[]

}

export interface SetEventAction {
  type: EventActionType.SET_EVENTS,
  payload: IEvent[]

}

export type EventAction =
  SetEventAction | SetGuestAction