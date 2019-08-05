import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rem from '../../style/rem';

const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: inherit;
  margin-bottom: ${rem(40)};
`;

const ProjectContainer = styled.div`
  background-color: ${props => props.theme.color.overlay};
  padding: ${rem(24)};
`;

const TextContainer = styled.div`
  max-width: 80%;
  text-align: right;
`;

const H3 = styled.h3`
  color: ${props => props.theme.color.accent.secondary};
  font-size: ${rem(14)};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${rem(22)};
`;

const P = styled.p`
  margin-bottom: ${rem(24)};
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
        <P>{project.about}</P>
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
