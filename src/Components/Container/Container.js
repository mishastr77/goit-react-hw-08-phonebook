import React from "react";
import styles from "./container.module.css";
import PropTypes from "prop-types";

const Container = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Container;

Container.propTypes = {
  children: PropTypes.array.isRequired,
};
