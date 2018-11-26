import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

class CompleteApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default CompleteApp;
