import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async ({ currentPage, perPage }) => {
  const data = await axios.get(`/api/users?currentPage=${currentPage}&perPage=${perPage}`).then((res) => res.data);
  return data;
});

export const fetchSelectedUser = createAsyncThunk('users/fetchSelectedUser', async (id) => {
  const data = await axios.get(`/api/users/${id}`).then((res) => res.data);
  return data;
});

export const deleteUser = createAsyncThunk('users/deleteUser', async (id) => {
  const data = await axios.delete(`/api/users/${id}`).then((res) => res.data);
  return data;
});
