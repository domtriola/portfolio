import React from 'react';
import PropTypes from 'prop-types';
import ICON_IMAGES from './iconImages';

const propTypes = {
  iconType: PropTypes.oneOf(['GitHub', 'LinkedIn']).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
  href: PropTypes.string.isRequired,
};

const defaultProps = {
  theme: 'dark',
};

const SocialIcon = ({ iconType, href, theme }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img
      src={ICON_IMAGES[iconType].src[theme]}
      alt={ICON_IMAGES[iconType].alt}
    />
  </a>
);

SocialIcon.propTypes = propTypes;
SocialIcon.defaultProps = defaultProps;

export default SocialIcon;
