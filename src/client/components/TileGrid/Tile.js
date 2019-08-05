import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rem from '../../style/rem';

import Text from './Text';
import Project, { projectPropTypes } from './Project';

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  margin-bottom: ${rem(40)};
`;

const propTypes = {
  text: PropTypes.string,
  project: { ...projectPropTypes },
};

const defaultProps = {
  text: '',
  project: {},
};

const Tile = ({ text, project }) => {
  const isProject = Object.keys(project).length > 0;

  return (
    <TileContainer>
      {isProject
        ? (
          <Project
            title={project.title}
            about={project.about}
            image={project.image}
          />
        )
        : (
          <Text>{text}</Text>
        )
      }
    </TileContainer>
  );
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;
