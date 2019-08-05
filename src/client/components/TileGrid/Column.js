import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.position === 0 ? 'flex-end' : 'flex-start')};
  width: 48%;
`;

const propTypes = {
  position: PropTypes.number.isRequired,
  children: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

const defaultProps = {
  children: [],
};

const Column = ({ position, children }) => (
  <ColumnContainer position={position}>
    {children}
  </ColumnContainer>
);

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
