import React from 'react';
import css from '../App.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts.map(({ id, name, number }) => 
	<li key={id} className={css.contactsItem}>
	  <p className={css.contactsText}>
		{name}: {number}
	  </p>
	  <button onClick={() => onDeleteContact(id)}>Delete</button>
	</li>
  )}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
