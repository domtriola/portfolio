import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  width: 45%;
`;

const propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

const defaultProps = {
  children: [],
};

const Column = ({ children }) => (
  <ColumnContainer>
    {children}
  </ColumnContainer>
);

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
