import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rem from '../../style/rem';

const ProjectContainer = styled.div`
  background-color: ${props => props.theme.color.overlay};
  padding: ${rem(24)};
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

export const projectPropTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  image: PropTypes.shape({
    path: PropTypes.string,
    alt: PropTypes.string,
  }),
};

const defaultProps = {
  title: '',
  about: '',
  image: {
    path: '',
    alt: '',
  },
};

const Project = ({ title, about, image }) => (
  <ProjectContainer>
    <H3>{title}</H3>
    <P>{about}</P>
    <img src={image.path} alt={image.alt} />
  </ProjectContainer>
);

Project.propTypes = projectPropTypes;
Project.defaultProps = defaultProps;

export default Project;
