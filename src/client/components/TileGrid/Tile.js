import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rem from '../../style/rem';

import Text from './Text';
import Project, { projectPropTypes } from './Project';

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems};
  margin-bottom: ${rem(40)};
`;

const propTypes = {
  text: PropTypes.string,
  project: { ...projectPropTypes },
  position: PropTypes.number,
};

const defaultProps = {
  text: '',
  project: {},
  position: 0,
};

const Tile = ({ text, project, position }) => {
  const isProject = Object.keys(project).length > 0;
  const alignItemsIfText = position === 0 ? 'flex-end' : 'flex-start';
  const alignItems = isProject ? 'stretch' : alignItemsIfText;

  return (
    <TileContainer alignItems={alignItems}>
      {isProject
        ? (
          <Project
            title={project.title}
            headline={project.headline}
            about={project.about}
            image={project.image}
            moreInfo={project.moreInfo}
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
