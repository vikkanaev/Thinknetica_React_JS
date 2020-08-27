/* eslint-disable max-len */
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import './index.css';
import books from './books.json';
import AuthContext from './AuthContext';

const user = {
  email: 'never@mail.me',
  firstName: 'Anonimus',
  lastName: 'Legion',
  avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/400px-Anonymous_emblem.svg.png',
};

ReactDOM.render(
  <AuthContext.Provider value = {user}>
    <App books={books}/>,
  </AuthContext.Provider>,
  document.getElementById('root'),
);
