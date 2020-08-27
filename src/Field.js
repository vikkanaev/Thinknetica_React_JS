import React from 'react';

// Field
//   type='input' {/* textarea */}
//   name='email'
//   label='Email'
//   onChange={this.handleChange}
//   value={this.state.email}

class Field extends React.Component {
  render() {
    const {
      type, name, label, onChange, value,
    } = this.props;

    return (
      <div>
        <label>{label}</label>
        { React.createElement(type, { name, onChange, value }, null) }
      </div>
    );
  }
}

export default Field;
