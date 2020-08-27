import React from 'react';

import Header from './Header';
import Main from './Main';
import BookList from './BookList';
import Footer from './Footer';
import logo from './img/logo.png';
import UserInfo from './UserInfo';

class App extends React.Component {
  render() {
    return (
      <>
        <Header title='MyBookSite' logo={logo} user={<UserInfo/>}/>
        <Main>
          <BookList {...this.props} />
        </Main>
        <Footer copyright='Viktor Kanaev'/>
      </>
    );
  }
}

export default App;
