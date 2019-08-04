import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rem from '../../style/rem';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin-right: ${rem(12)}
`;

const H1 = styled.h1`
  text-transform: uppercase;
`;

export const logoPropTypes = {
  image: PropTypes.shape({
    path: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
};

const Logo = ({ image, text }) => (
  <LogoContainer>
    <Img src={image.path} alt={image.alt} />
    <H1>
      {text}
    </H1>
  </LogoContainer>
);

Logo.propTypes = logoPropTypes;

export default Logo;
