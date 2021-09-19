import { EventAction, EventActionType, EventState } from './type';

const defaultState: EventState = {
  guests: [],
  events: []
};

export function eventReducer(state = defaultState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionType.SET_EVENTS:
      return { ...state, events: action.payload };
    case EventActionType.SET_GUESTS:
      return { ...state, guests: action.payload };
    default:
      return state;
  }
}