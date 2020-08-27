/* eslint-disable class-methods-use-this */
import React from 'react';
import AuthContext from './AuthContext';

class UserInfo extends React.Component {
  render() {
    return (
        <AuthContext.Consumer>
          {
            ({
              email, firstName, lastName, avatarUrl,
            }) => (
              <div style={styles.container}>
                <div style={styles.imageBox}>
                  <img style={styles.image} src={avatarUrl} alt={firstName}/>
                </div>
                <div style={styles.cardBody}>
                  <div><strong>{firstName} {lastName}</strong></div>
                  <div>Email: {email}</div>
                </div>
              </div>
            )
          }
        </AuthContext.Consumer>
    );
  }
}

export default UserInfo;

const styles = {
  container: {
    // display: 'flex',
    padding: '10px',
    fontSize: 'small',
  },
  imageBox: {
    maxWidth: '70px',
  },
  image: {
    width: '100%',
    borderRadius: '50%',
  },
  cardBody: {
    flex: '1',
    padding: '10px',
  },
};
