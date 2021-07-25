import React from "react";
import PropTypes from "prop-types";
import styles from "./filter.module.css";
import { connect } from "react-redux";
import { filterChange } from "../../redux/contacts/contacts-actions";
import { getFilter } from "../../redux/contacts/contacts-selectors";

const Filter = ({ filter, onChangeFilter }) => (
  <label className={styles.filterLabel}>
    <span>Find contacts by name and number</span>
    <input
      className={styles.filterInput}
      type="text"
      value={filter}
      onChange={onChangeFilter}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChangeFilter: PropTypes.func,
};

const mapStateToProps = (state) => ({
  filter: getFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeFilter: (e) => dispatch(filterChange(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
