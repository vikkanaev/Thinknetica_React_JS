import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div style={style.header}>
        <div>
          <img src={this.props.logo}/>
        </div>
        <div style={style.title}>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default Header;

const style = {
  header: {
    backgroundColor: '#222222',
    color: '#fff',
    minHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '10px 10%',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
};
