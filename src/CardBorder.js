import React from 'react';

class CardBorder extends React.Component {
  render() {
    return (
      <div style={styles.item}> 
        {this.props.children}
      </div>
    );
  }
}

export default CardBorder;

const styles = {
  item: {
    background: '#f0f0f0',
    border: '1px solid black',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
  },
};
