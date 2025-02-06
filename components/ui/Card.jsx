import PropTypes from 'prop-types';
import React from "react";

const Card = ({ title, children, className }) => {
  return (
    <div className={`card ${className || ""}`}>
      {title && (
        <div className="card-header">
          <h4>{title}</h4>
        </div>
      )}
      <div className="card-body">{children}</div>
    </div>
  );
};

Card.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Card;