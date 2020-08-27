/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React from 'react';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Anonimus',
      email: 'never@mail.me',
      question: 'What\'s Up, Doc?',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(variableName, event) {
    this.setState({ [variableName]: event.target.value });
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
          <div>
            <label>Name</label>
            <input
              value={this.state.name}
              onChange={(e) => this.handleChange('name', e)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              value={this.state.email}
              onChange={(e) => this.handleChange('email', e)}
            />
          </div>
          <div>
            <label>Question</label>
            <textarea
              value={this.state.question}
              onChange={(e) => this.handleChange('question', e)}
            />
          </div>
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
