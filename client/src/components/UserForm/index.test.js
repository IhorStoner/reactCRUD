import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewUserForm } from './index';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../redux/rootReducer';

const renderWithRedux = (component, { initialState, store = configureStore({ reducer: rootReducer, preloadedState: initialState }) } = {}) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

const data = {
  name: 'John',
  surname: 'Doe',
  phone: '0800605000',
  email: 'john.dee@someemail.com',
  dateOfBirthday: '12/12/1234',
};

describe('User Form:', () => {
  it('New User form should data send', async () => {
    const onSubmit = jest.fn();

    const { store } = renderWithRedux(<NewUserForm onSubmit={onSubmit} />);

    userEvent.type(screen.getByLabelText('Name'), data.name);
    userEvent.type(screen.getByLabelText(/surname/i), data.surname);
    userEvent.type(screen.getByLabelText(/email/i), data.email);
    userEvent.type(screen.getByLabelText(/Date of birthday/i), data.dateOfBirthday);
    userEvent.type(screen.getByLabelText(/phone/i), data.phone);

    userEvent.click(screen.getByText('Submit'));

    // expect(onSubmit).toBeCalledTimes(1);
    // console.log(store.getState());

    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(1);
      expect(onSubmit.mock.calls[0][0]).toEqual({
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
        dateOfBirthday: data.dateOfBirthday,
      });
    });
  });
});
