import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from './usersActions';

export const useUsersActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(usersActions, dispatch);
};
