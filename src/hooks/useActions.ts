import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { UserActionCreators } from '../store/reducers/user_reducer/action-creators';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(UserActionCreators, dispatch);
};