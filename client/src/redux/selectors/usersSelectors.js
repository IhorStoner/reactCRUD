import { createSelector } from '@reduxjs/toolkit';

export const getUsers = createSelector(
  (state) => state.users.data,
  (users) => users
);

export const getUsersLoading = createSelector(
  (state) => state.users.loading,
  (loading) => loading
);

export const getCountPages = createSelector(
  (state) => state.users.pages,
  (pages) => pages
);
