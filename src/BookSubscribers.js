/* eslint-disable class-methods-use-this */
import React from 'react';

class BookSubscribers extends React.Component {
  isTopSubscribed(subscribers, topSubscribedLimit) {
    return subscribers >= topSubscribedLimit;
  }

  render() {
    const { subscribers, topSubscribedLimit } = this.props;

    return (
      <>
        <div>Subscribers: {subscribers}</div>
        {
          this.isTopSubscribed(subscribers, topSubscribedLimit) && <>
            <div style={styles.topSubscribed}>This is TOP-Subscribed Book!</div>
          </>
        }
      </>
    );
  }
}

export default BookSubscribers;

const styles = {
  topSubscribed: {
    color: 'red',
  },
};
