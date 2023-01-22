import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <form className={css.wrapperFilter}>
      <label className={css.labelFilter}>Find contacts by name</label>
      <input
        className={css.inputFilter}
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
