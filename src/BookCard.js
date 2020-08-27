import React from 'react';

import CardBorder from './CardBorder';
import BookDescription from './BookDescription';
import AuthorList from './AuthorList';
import SubscriptionInfoModal from './SubscriptionInfoModal';
import FeedbackForm from './FeedbackForm';

class BookCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribers: this.props.book.subscribers,
      topSubscribedLimit: 100,
    };
  }

  render() {
    const { book: { authors } } = this.props;

    return (
      <CardBorder>
        <BookDescription {...this.props} subscribersInfo={this.state}/>
        <AuthorList authors={authors}/>
        <button>Subscribe</button>
        <SubscriptionInfoModal/>
        <FeedbackForm/>
      </CardBorder>
    );
  }
}

export default BookCard;
