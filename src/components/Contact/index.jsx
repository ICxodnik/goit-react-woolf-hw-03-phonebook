import PropTypes from 'prop-types';
import React from 'react';
import css from 'components/Contact/index.module.css';

export default function Contact(props) {
  return (
    <li className={css.contactData}>
      <span className={css.name}>{props.data.name}</span>
      <span className={css.number}>+{props.data.number}</span>
    </li>
  );
}

Contact.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }),
};
