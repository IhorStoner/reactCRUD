import React from 'react';
import createStore from './redux/createStore';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import Routes from './Routes';

const store = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
