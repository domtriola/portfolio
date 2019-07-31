import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  // theme: PropTypes.oneOf(['primary', 'secondary']),
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

const defaultProps = {
  // theme: 'primary',
  // size: 'medium',
  onClick: () => { },
  disabled: false,
};

const Button = ({
  text,
  onClick,
  disabled,
}) => (
  <button
    onClick={onClick}
    type="button"
    disabled={disabled}
  >
    {text}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
