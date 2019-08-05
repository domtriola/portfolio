import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
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

const Column = ({ position, children }) => {
  const childrenWithPos = React.Children.toArray(children).map(
    child => React.cloneElement(child, { position }),
  );

  return (
    <ColumnContainer>
      {childrenWithPos}
    </ColumnContainer>
  );
};

Column.propTypes = propTypes;
Column.defaultProps = defaultProps;

export default Column;
