import React from 'react';

class BookDescription extends React.Component {
  render() {
    const { book: { cover, title, description, minPrice, suggestrdPrice } } = this.props;
    
    return (
      <>
        <div style={styles.container}>
          <div style={styles.imageBox}>
            <img style={styles.image} src={cover} alt={title}/>
          </div>
          <div style={styles.cardBody}>
            <div><h2>{title}</h2></div>
            <div>{description}</div>
            <div>MINIMUM PRICE: ${minPrice}</div>
            <div>SUGGESTED PRICE: ${suggestrdPrice}</div>
            <div>{this.props.subscribers}</div>
          </div>
        </div>
      </>
    )
  }
}

export default BookDescription;

const styles = {
  container: {
    display: 'flex',
    padding: '10px'
  },
  imageBox: {
    maxWidth: '200px',
  },
  image: {
    width: '100%',
  },
  cardBody: {
    flex: '1',
    padding: '10px'
  },
};