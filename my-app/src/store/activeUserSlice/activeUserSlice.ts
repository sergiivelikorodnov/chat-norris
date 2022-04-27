import { UserType } from './../../types/users';
import { ActiveUserStateType } from './../../types/state';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { emptyUser } from 'mocks/usersMock';

const initialState: ActiveUserStateType = {
  activeUser: emptyUser,
};

const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState,
  reducers: {
    setActiveUser(state, action: PayloadAction<UserType>) {
      state.activeUser = action.payload;
    },

  },
});

export const { setActiveUser } =
activeUserSlice.actions;

export default activeUserSlice.reducer;
