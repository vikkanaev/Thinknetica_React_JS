import React from 'react';

import CardBorder from './CardBorder';
import BookDescription from './BookDescription';
import BookSubscribers from './BookSubscribers';
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

  render() {
    const { book: { authors } } = this.props;

    return (
      <CardBorder>
        <BookDescription {...this.props}
          subscribers={<BookSubscribers {...this.state}/> }
        >
        </BookDescription>
        <AuthorList authors={authors}/>
        <button>Subscribe</button>
        <SubscriptionInfoModal/>
      </CardBorder>
    );
  }
}

export default BookCard;
