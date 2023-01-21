import React, { Component } from 'react';
import ContactForm from './Phonebook/ContactForm';
import './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <ul>
          <li>Eden Clements: 645-17-79</li>
          <li>Hermione Kline: 443-89-12</li>
          <li>Rosie Simpson: 459-12-56</li>
        </ul>
      </div>
    );
  }
}

export default App;

// <div>
//  <h1>Phonebook</h1>
//  <ContactForm ... />

//  <h2>Contacts</h2>
//  <Filter ... />
//  <ContactList ... />
// </div>
