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
  margin-bottom: ${rem(16)};
`;

const H4 = styled.h4`
  font-size: ${rem(28)};
  margin-bottom: ${rem(14)};
`;

const P = styled.p`
  margin-bottom: ${rem(24)};
`;

const A = styled.a`
  color: ${props => props.theme.color.font};
  text-decoration: none;
  display: inline-block;
  margin-bottom: ${rem(30)};
`;

export const projectPropTypes = {
  title: PropTypes.string,
  headline: PropTypes.string,
  about: PropTypes.string,
  image: PropTypes.shape({
    path: PropTypes.string,
    alt: PropTypes.string,
  }),
  moreInfo: PropTypes.shape({
    text: PropTypes.string,
    path: PropTypes.string,
  }),
};

const defaultProps = {
  title: '',
  headline: '',
  about: '',
  image: {},
  moreInfo: {},
};

const ifPresent = (value) => {
  if (typeof value !== 'string' && typeof value !== 'object') {
    throw Error(`Expecting string or object, but got: ${typeof value}`);
  }

  if (typeof value === 'string') {
    return value.length > 0;
  }

  const keys = Object.keys(value);
  const anyValuesPresent = keys.some(key => value[key].length > 0);
  return keys.length > 0 && anyValuesPresent;
};

const Project = ({
  title,
  headline,
  about,
  image,
  moreInfo,
}) => (
  <ProjectContainer>
    {ifPresent(title) ? <H3>{title}</H3> : null}
    {ifPresent(headline) ? <H4>{headline}</H4> : null}
    {ifPresent(about) ? <P>{about}</P> : null}
    {ifPresent(moreInfo)
      ? <A href={moreInfo.path}>{moreInfo.text}</A>
      : null}
    {ifPresent(image)
      ? <img src={image.path} alt={image.alt} />
      : null}
  </ProjectContainer>
);

Project.propTypes = projectPropTypes;
Project.defaultProps = defaultProps;

export default Project;
