/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import React from 'react';

import AuthorList from './AuthorList';
import SubscriptionInfoModal from './SubscriptionInfoModal';

class BookCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribers: this.props.book.subscribers,
      topSubscribedLimit: 100,
    };
  }

  isTopSubscribed() {
    return this.state.subscribers >= this.state.topSubscribedLimit;
  }

  render() {
    const {
      book: {
        cover, title, description, minPrice, suggestrdPrice, authors,
      },
    } = this.props;
    const { subscribers } = this.state;

    return (
      <div style={styles.bookItem}>
        <div style={styles.container}>
          <div style={styles.imageBox}>
            <img style={styles.image} src={cover} alt={title}/>
          </div>
          <div style={styles.cardBody}>
            <div>{title}</div>
            <div>{description}</div>
            <div>MINIMUM PRICE: ${minPrice}</div>
            <div>SUGGESTED PRICE: ${suggestrdPrice}</div>
            <div>Subscribers: {subscribers}</div>
            {
              this.isTopSubscribed() && <>
                <div style={styles.topSubscribed}>This is TOP-Subscribed Book!</div>
              </>
            }
          </div>
        </div>
        <div style={styles.container}>
          <AuthorList authors={authors}/>
        </div>
        <button>Subscribe</button>
        <SubscriptionInfoModal/>
      </div>
    );
  }
}

export default BookCard;

const styles = {
  container: {
    display: 'flex',
  },
  bookItem: {
    background: '#f0f0f0',
    border: '1px solid black',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
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
  topSubscribed: {
    color: 'red',
  },
};
