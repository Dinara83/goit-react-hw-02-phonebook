import PropTypes from 'prop-types';

import css from './filter-phonebook.module.css';

const FilterPhonebook = ({ value, onChange }) => {
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

FilterPhonebook.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterPhonebook;
