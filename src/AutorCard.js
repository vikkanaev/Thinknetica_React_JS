import React from 'react';

class AutorCard extends React.Component {
  render() {
    const {
      autor: {
        name, email, bio, avatar,
      },
    } = this.props;
    return (
      <div style={styles.container}>
        <div style={styles.imageBox}>
          <img style={styles.image} src={avatar} alt={name}/>
        </div>
        <div style={styles.cardBody}>
          <div>{name}</div>
          <div>{email}</div>
          <div>{bio}</div>
        </div>
      </div>
    );
  }
}

export default AutorCard;

const styles = {
  container: {
    display: 'flex',
  },
  imageBox: {
    maxWidth: '150px',
  },
  image: {
    width: '100%',
  },
  cardBody: {
    flex: '1',
  },
};
