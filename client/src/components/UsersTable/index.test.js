import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import UsersTable from './index';
import { createMemoryHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../redux/rootReducer';

const renderWithRedux = (
  component,
  { initialState, store = configureStore({ reducer: rootReducer, preloadedState: initialState }) } = {},
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <Router history={history}>{component}</Router>
      </Provider>
    ),
    store,
  };
};

const users = [
  {
    _id: '123',
    name: 'John',
    surname: 'Doe',
    phone: '312',
    email: '0800',
    dateOfBirthday: '12/12/1234',
    updatedAt: '12/12/1234 14:14',
  },
];
let fetchUsers;

beforeEach(() => {
  fetchUsers = jest.fn();
});

describe('Users Table: ', () => {
  it('should render', () => {
    const { getByText } = renderWithRedux(<UsersTable users={users} isUsersLoading={false} fetchUsers={fetchUsers} />);

    expect(getByText(users[0].name)).toBeDefined();
    expect(getByText(users[0].surname)).toBeDefined();
    expect(getByText(users[0].phone)).toBeDefined();
    expect(getByText(users[0].email)).toBeDefined();
    expect(getByText(users[0].dateOfBirthday)).toBeDefined();
    expect(getByText(users[0].updatedAt)).toBeDefined();
  });
});
