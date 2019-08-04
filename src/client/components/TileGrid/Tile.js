import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string,
  project: PropTypes.shape({
    title: PropTypes.string,
  }),
};

const defaultProps = {
  text: '',
  project: {},
};

const Tile = ({ text, project }) => {
  const isProject = Object.keys(project).length > 0;

  return isProject
    ? (
      <div>{project.title}</div>
    ) : (
      <div>{text}</div>
    );
};

Tile.propTypes = propTypes;
Tile.defaultProps = defaultProps;

export default Tile;
