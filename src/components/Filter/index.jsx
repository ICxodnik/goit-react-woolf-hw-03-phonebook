import PropTypes from 'prop-types';
import React from 'react';
import css from 'components/Filter/index.module.css';

export default function Filter(props) {
  return (
    <div className={css.filter}>
      <span>Find contact by name</span>
      <input
        value={props.value}
        onChange={e => props.onChange(e.currentTarget.value)}
      ></input>
    </div>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
