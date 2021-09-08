import { render, screen } from '@testing-library/react';
import React from 'react';
import { createMemoryHistory } from 'history';
import Routes from './Routes';
import { Provider } from 'react-redux';
import createStore from './redux/createStore';
import userEvent from '@testing-library/user-event';

const renderWithRouter = (component, { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {}) => {
  const store = createStore();
  const Wrapper = ({ children }) => (
    <Provider store={store}>
      <Routes history={history}>{children}</Routes>
    </Provider>
  );
  return {
    ...render(component, { wrapper: Wrapper }),
    history,
  };
};

describe('Routes:', () => {
  it('should routes work', () => {
    const { getByText, getByTestId } = renderWithRouter();

    userEvent.click(getByText('Create New User'));

    expect(getByTestId('form')).toBeDefined();
  });
});
