/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React from 'react';
import Field from './Field';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Anonimus',
      email: 'never@mail.me',
      question: 'What\'s Up, Doc?',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    const { name, email, question } = this.state;
    event.preventDefault();
    console.log({ name, email, question });
  }

  render() {
    return (
      <div style={styles.form}>
        <form onSubmit={this.handleSubmit}>
          <Field
            type='input'
            name='name'
            label='Name'
            onChange={this.handleChange}
            value={this.state.name}
          />
          <Field
            type='input'
            name='email'
            label='Email'
            onChange={this.handleChange}
            value={this.state.email}
          />
          <Field
            type='textarea'
            name='question'
            label='Question'
            onChange={this.handleChange}
            value={this.state.question}
          />
          <input type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}

export default FeedbackForm;

const styles = {
  form: {
    border: '1px solid black',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};
