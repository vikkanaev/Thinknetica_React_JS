/* eslint-disable react/prop-types */
/* eslint-disable no-use-before-define */
import React from 'react';

import logo from './img/logo.png';
import BookList from './BookList';

class App extends React.Component {
  render() {
    return (
      <>
        <header style={style.header}>
          <img src={logo}/>
          MyBookSite
        </header>
        <main style={style.main}>
          <BookList books={this.props.books} />
        </main>
        <footer style={style.footer}>
          &copy;VikKanaev {new Date().getFullYear()}
        </footer>
      </>
    );
  }
}

export default App;

const style = {
  header: {
    backgroundColor: '#222222',
    color: '#fff',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  main: {
    padding: '10px 10%',
  },
  footer: {
    padding: '0 10%',
    marginTop: '50px',
  },
};
