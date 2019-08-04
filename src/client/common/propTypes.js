import PropTypes from 'prop-types';

export const childrenPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export const themePropTypes = {
  theme: PropTypes.shape({
    color: PropTypes.shape({
      accent: PropTypes.shape({
        primary: PropTypes.string.isRequired,
        secondary: PropTypes.string.isRequired,
        tertiary: PropTypes.string.isRequired,
        highlight: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
