import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rem from '../../style/rem';
import content from '../../../content';

const TileContainer = styled.div`
  margin-bottom: ${rem(40)};
`;

const ProjectContainer = styled.div`
  background-color: ${props => props.theme.color.overlay};
  padding: ${rem(24)};
`;

const TextContainer = styled.div`
  text-align: right;
`;

const H3 = styled.h3`
  color: ${props => props.theme.color.accent.secondary};
  font-size: ${rem(14)};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${rem(22)};
`;

const propTypes = {
  text: PropTypes.string,
  project: PropTypes.shape({
    title: PropTypes.string,
    about: PropTypes.string,
    image: PropTypes.shape({
      path: PropTypes.string,
      alt: PropTypes.string,
    }),
  }),
};

const defaultProps = {
  text: '',
  project: {},
};

const Tile = ({ text, project }) => {
  const isProject = Object.keys(project).length > 0;

  // TODO: move these components to their own files
  const innerComponent = isProject
    ? (
      <ProjectContainer>
        <H3>{project.title}</H3>
        <p>{project.about}</p>
        <img src={project.image.path} alt={project.image.alt} />
      </ProjectContainer>
    ) : (
      <TextContainer>
        {text}
      </TextContainer>
    );

  return (
    <TileContainer>
      {innerComponent}
    </TileContainer>
  );
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;
