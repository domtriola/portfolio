import React from 'react';
import PropTypes from 'prop-types';

import ICON_IMAGES from './iconImages';

const SocialIcon = ({ iconType, href, theme }) => (
  <a href={href} target="_blank">
    <img
      src={ICON_IMAGES[iconType].src[theme]}
      alt={ICON_IMAGES[iconType].alt}
    />
  </a>
);

SocialIcon.propTypes = {
  iconType: PropTypes.oneOf(['GitHub', 'LinkedIn']).isRequired,
  theme: PropTypes.oneOf(['dark', 'light']),
  href: PropTypes.string.isRequired,
};

SocialIcon.defaultProps = {
  theme: 'dark',
}

export default SocialIcon;
