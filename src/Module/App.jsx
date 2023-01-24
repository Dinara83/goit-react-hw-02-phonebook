import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './PhonebookContact/ContactForm';
import FilterPhonebook from './FilterPhonebook/FilterPhonebook';
import ContactList from './Contacts/ContactList';

import initialContacts from '../contacts.json';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  removeContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  addFormSubmitContact = ({ name, number }) => {
    if (this.isDublicate(name, number)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    this.setState(prevState => {
      const { contacts } = prevState;

      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return { contacts: [newContact, ...contacts] };
    });

    return true;
  };

  isDublicate(name, number) {
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const { contacts } = this.state;

    const result = contacts.find(({ name, number }) => {
      return (
        name.toLowerCase() === normalizedName &&
        number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(result);
  }

  changeFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  getfilterContacts() {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedContact = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedContact) ||
        number.toLowerCase().includes(normalizedContact)
      );
    });
    return result;
  }

  render() {
    const { filter } = this.state;
    const contacts = this.getfilterContacts();
    const { addFormSubmitContact, changeFilter, removeContact } = this;

    return (
      <div className={css.conteinerPhonebook}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addFormSubmitContact} />

        <h2>Contacts</h2>
        <FilterPhonebook value={filter} onChange={changeFilter} />
        <ContactList contacts={contacts} onDeleteContact={removeContact} />
      </div>
    );
  }
}

export default App;
