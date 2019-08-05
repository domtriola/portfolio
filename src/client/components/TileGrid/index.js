import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Column from './Column';

const Section = styled.section`
  display: flex;
  justify-content: space-between;
`;

const propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.object,
  ),
};

const defaultProps = {
  children: [],
};

const TileGrid = ({ children }) => {
  const evens = children.filter((_, index) => index % 2 === 0);
  const odds = children.filter((_, index) => index % 2 === 1);

  return (
    <Section>
      <Column position={0}>{evens}</Column>
      <Column position={1}>{odds}</Column>
    </Section>
  );
};

TileGrid.propTypes = propTypes;
TileGrid.defaultProps = defaultProps;

export default TileGrid;
