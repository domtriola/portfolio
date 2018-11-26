import React from 'react';
import PropTypes from 'prop-types';
import './Project.css';

import SocialIcon from '../SocialIcon/SocialIcon';
// TODO: Make image turn into gif on hover
// TODO: Add Github link next to title(?)

const Project = ({
  title,
  link,
  githubUrl,
  imagePath,
  imageAlt,
  isExternal
}) => (
  <div>
    <h3>{title}</h3>
    {githubUrl ? <SocialIcon iconType="GitHub" href={githubUrl} /> : null}
    <a href={link} target={isExternal ? '_blank' : null}>
      <img src={imagePath} alt={imageAlt} />
    </a>
  </div>
);

Project.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  githubUrl: PropTypes.string,
  imagePath: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
};

Project.defaultProps = {
  isExternal: false,
  githubPath: '',
}

export default Project;
