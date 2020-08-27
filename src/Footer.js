import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div style={style.footer}>
        &copy;{this.props.copyright} {new Date().getFullYear()}
      </div>
    );
  }
}

export default Footer;

const style = {
  footer: {
    padding: '0 10%',
    marginTop: '50px',
  },
};
