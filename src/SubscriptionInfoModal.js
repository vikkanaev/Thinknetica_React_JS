/* eslint-disable no-use-before-define */
import React from 'react';
import ReactDOM from 'react-dom';

class SubscriptionInfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <>
        <a onClick={() => this.toggle()}>Subscription Info</a>
        {
          this.state.isOpen && ReactDOM.createPortal(
            <div style={styles.overlay}>
              <div style={styles.body}>
                If you donate more than $100 you get book with author autograph.
                <button onClick={() => this.toggle()}>Close</button>
              </div>
            </div>,
            document.getElementById('modal-root'),
          )
        }

      </>
    );
  }
}

export default SubscriptionInfoModal;

const styles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    position: 'fixed',
    height: '100%',
    width: '100%',
    top: 0,
    left: 0,
  },
  body: {
    backgroundColor: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
