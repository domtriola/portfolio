import React from 'react';
import styled from 'styled-components';
import { childrenPropTypes } from '../../common/propTypes';
import rem from '../../style/rem';

const P = styled.p`
  font-size: ${rem(38)};
`;

const propTypes = {
  ...childrenPropTypes.isRequired,
};

const TagLine = ({ children }) => (
  <P>{children}</P>
);

TagLine.propTypes = propTypes;

export default TagLine;
