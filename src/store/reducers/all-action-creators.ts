import { EventActionCreators } from './event_reducer/action-creators';
import { UserActionCreators } from './user_reducer/action-creators';

export const AllActionCreators = {
  ...EventActionCreators,
  ...UserActionCreators
};