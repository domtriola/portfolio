import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextContainer = styled.div`
  max-width: 80%;
  text-align: right;
  align-items: right;
`;

const propTypes = {
  children: PropTypes.string,
};

const defaultProps = {
  children: '',
};

const Text = ({ children }) => (
  <TextContainer>
    {children}
  </TextContainer>
);

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
