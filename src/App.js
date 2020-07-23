import React from 'react';

import Hello from './Hello';

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name='World'/>
        <Hello name='Eath'/>
        <Hello name='Mars'/>
      </div>
    );
  }
}

export default App;
