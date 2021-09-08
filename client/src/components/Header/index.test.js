import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';
import Routes from '../../Routes';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import createStore from '../../redux/createStore';

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

describe('Header:', () => {
  it('should render', () => {
    const { getByText, getAllByTestId } = renderWithRouter(<Header />);
    const [link1, link2] = getAllByTestId('link');

    expect(getByText('Users')).toBeDefined();
    expect(getByText('Create New User')).toBeDefined();

    expect(link1.getAttribute('href')).toBe('/');
    expect(link2.getAttribute('href')).toBe('/create');
  });
});
