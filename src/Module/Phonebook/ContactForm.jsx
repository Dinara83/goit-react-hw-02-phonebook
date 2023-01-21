import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from '../App.module.css';

class ContactForm extends Component {
  nameInputId = nanoid();
  numberInputId = nanoid();

  state = {
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    //   const { login, email, password } = this.state;
    //   console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    //   this.props.onSubmit({ ...this.state });
    this.reset();
    this.props.onSubmit(this.state);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form className={css.wrapper} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Name</label>
        <div>
          <input
            id={this.nameInputId}
            type="text"
            name="name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />

          <label htmlFor={this.numberInputId}>Number</label>
          <input
            id={this.numberInputId}
            type="tel"
            name="number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
