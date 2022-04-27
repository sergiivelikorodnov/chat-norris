import { StoreNameSpace } from '../rootReducer';
import { State } from '../../types/state';

export const getActiveUser = (state: State) =>
  state[StoreNameSpace.ActiveUser].activeUser;

