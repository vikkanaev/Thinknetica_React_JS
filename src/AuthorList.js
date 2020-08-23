/* eslint-disable react/prop-types */
import React from 'react';

import AuthorCard from './AuthorCard';

class AuthorList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authorsCount: this.props.authors.length,
      authorsDefaultShowLimit: 3,
      showAllAuthors: false,
    };
  }

  toggleAuthorsShowLimit() {
    this.setState({ showAllAuthors: !this.state.showAllAuthors });
  }

  authorsShowLimit() {
    const { authorsCount, authorsDefaultShowLimit, showAllAuthors } = this.state;

    return showAllAuthors ? authorsCount : authorsDefaultShowLimit;
  }

  render() {
    const { authorsCount, showAllAuthors, authorsDefaultShowLimit } = this.state;
    return (
      <div>
        {this.props.authors.slice(0, this.authorsShowLimit()).map((author) => (
          <AuthorCard key={author.id} author={author}/>
        ))}
        {
          authorsCount >= 3 && <>
            <button onClick={() => this.toggleAuthorsShowLimit()}>
              {
                showAllAuthors
                  ? <> hide {authorsCount - authorsDefaultShowLimit} additional authors</>
                  : <> show all {authorsCount} authors</>
              }
            </button>
          </>
        }
      </div>
    );
  }
}

export default AuthorList;
