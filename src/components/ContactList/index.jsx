import PropTypes from 'prop-types';
import React from 'react';
import Contact from 'components/Contact';
import css from 'components/ContactList/index.module.css';

export default function ContactList(props) {
  return (
    <ul className={css.contactList}>
      {props.contacts.map((el, number) => (
        <div className={css.contact} key={el.id}>
          <span>{number + 1}.</span>
          <Contact data={el} />
          <button onClick={() => props.handleDelete(el.id)}>Delete</button>
        </div>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  handleDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
