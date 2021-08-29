import { createReducer } from '@reduxjs/toolkit';
import { fetchUsers, fetchSelectedUser } from '../actions/usersActions';

const initialState = {
  loading: false,
  data: [],
  pages: 1,
  selectedUser: '',
  error: null,
};

const usersReducer = createReducer(initialState, {
  [fetchUsers.pending]: (state, action) => {
    state.loading = true;
  },
  [fetchUsers.fulfilled]: (state, action) => {
    state.data = action.payload.users;
    state.pages = action.payload.pages;
    state.loading = false;
  },
  [fetchUsers.rejected]: (state, action) => {
    state.error = action.payload;
  },
  [fetchSelectedUser.pending]: (state, action) => {
    state.loading = true;
  },
  [fetchSelectedUser.fulfilled]: (state, action) => {
    state.selectedUser = action.payload;
    state.loading = false;
  },
  [fetchSelectedUser.rejected]: (state, action) => {
    state.error = action.payload;
  },
});

export default usersReducer;
