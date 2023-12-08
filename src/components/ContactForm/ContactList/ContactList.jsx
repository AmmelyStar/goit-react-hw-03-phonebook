import React from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css';

const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <div className={css.container}>
      <h2 className={css.contacts}>Contacts List</h2>
      <div className={css.form}>
        <ul className={css.list}>
          {contacts.map((contact) => (
            <li key={contact.id} className={css.item}>
              {contact.name} - {contact.number}
              <button
                type="button"
                name="delete"
                onClick={() => onRemoveContact(contact.id)}
                className={css.button}
              >
                Delete contact
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactList;