import React from 'react';

import AuthorCard from './AuthorCard';

class BookCard extends React.Component {
  render() {
    const {
      book: {
        cover, title, description, minPrice, suggestrdPrice,
      },
    } = this.props;
    return (
      <div>
        <div style={styles.container}>
          <div style={styles.imageBox}>
            <img style={styles.image} src={cover} alt={title}/>
          </div>
          <div style={styles.cardBody}>
            <div>{title}</div>
            <div>{description}</div>
            <div>MINIMUM PRICE: ${minPrice}</div>
            <div>SUGGESTED PRICE: ${suggestrdPrice}</div>
          </div>
        </div>
        <div style={styles.container}>
          <AuthorCard author={this.props.book.author}/>
        </div>
        <button>Subscribe</button>
      </div>
    );
  }
}

export default BookCard;

const styles = {
  container: {
    display: 'flex',
  },
  imageBox: {
    maxWidth: '200px',
  },
  image: {
    width: '100%',
  },
  cardBody: {
    flex: '1',
  },
};
