import React from "react";
import PropTypes from "prop-types";
import "./section.module.css";

const Section = ({ children, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  children: PropTypes.object.isRequired,
};
