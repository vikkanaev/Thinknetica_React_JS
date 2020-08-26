import React from 'react';

class AuthorCard extends React.Component {
  render() {
    const { author: { name, email, bio, avatar } } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={avatar} alt={name}/>
        </div>
        <div style={styles.cardBody}>
          <div><strong>{name}</strong></div>
          <div>{bio}</div>
          <div>Email: {email}</div>
        </div>
      </div>
    );
  }
}

export default AuthorCard;

const styles = {
  container: {
    display: 'flex',
    padding: '10px'
  },
  imageBox: {
    maxWidth: '150px',
  },
  image: {
    width: '100%',
    borderRadius: '50%'
  },
  cardBody: {
    flex: '1',
    padding: '10px'
  },
};
