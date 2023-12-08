import React from 'react';
import PropTypes from 'prop-types';
import css from './style.module.css'
export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <>
      <div  className={css.container}>
        <h3 className={css.subtitle}>Find contacts by name</h3>

        <input className={css.fild}
          name="filter"
          value={filter}
          type="text"
          onChange={onChangeFilter}
        />
      </div>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;