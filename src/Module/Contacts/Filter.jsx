import React from 'react';
import PropTypes from 'prop-types';
import css from '../App.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <form className={css.wrapperFilter}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
