import React from 'react';
import styled, { withTheme } from 'styled-components';
import rem from '../../style/rem';
import { themePropTypes } from '../../common/propTypes';

const ColorBox = styled.div`
  height: ${props => props.height};
  width: 100%;
  background-color: ${props => props.color};
`;

const propTypes = {
  ...themePropTypes,
};

const Footer = ({ theme }) => (
  <footer>
    <ColorBox
      height={rem(150)}
      color={theme.color.accent.tertiary}
    />
    <ColorBox
      height={rem(75)}
      color={theme.color.accent.primary}
    />
    <ColorBox
      height={rem(75)}
      color={theme.color.accent.secondary}
    />
    <ColorBox
      height={rem(30)}
      color={theme.color.accent.highlight}
    />
  </footer>
);

Footer.propTypes = propTypes;

export default withTheme(Footer);
