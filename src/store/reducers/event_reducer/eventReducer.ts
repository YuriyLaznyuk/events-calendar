import { EventAction, EventActionType, EventState } from './type';

const defaultState: EventState = {
  guests: [],
  events: [],
  event: false
};

export function eventReducer(state = defaultState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionType.SET_EVENTS:
      return { ...state, events: action.payload };
    case EventActionType.SET_GUESTS:
      return { ...state, guests: action.payload };
    case EventActionType.CHANGE_EVENT:
      return { ...state, event: !state.event };
    default:
      return state;
  }
}