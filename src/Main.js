import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div style={style.main}>
        {this.props.children}
      </div>
    );
  }
}

export default Main;

const style = {
  main: {
    padding: '10px 10%',
  }
};
