import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ theme, size, text, onClick, disabled }) => (
  <button
    className={`
      Button
      Button--theme-${theme}
      Button--size-${size}
    `}
    onClick={onClick}
    disabled={disabled}
  >
    {text}
  </button>
);

Button.propTypes = {
  theme: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
  onClick: () => {},
  disabled: false,
};

export default Button;
