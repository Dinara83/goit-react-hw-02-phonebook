import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from '../App.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { INITIAL_STATE };

  nameInputId = nanoid();
  numberInputId = nanoid();

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(evt);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={css.wrapper} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId} className={css.label}>
          Name
        </label>
        <input
          className={css.input}
          id={this.nameInputId}
          value={name}
          type="text"
          name="name"
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <label htmlFor={this.numberInputId} className={css.label}>
          Number
        </label>
        <input
          className={css.input}
          id={this.numberInputId}
          value={number}
          type="tel"
          name="number"
          onChange={this.handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
export default ContactForm;
