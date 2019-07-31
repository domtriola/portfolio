import React from 'react';
import Project from '../../components/Project/Project';
import spacetyperImage from '../../images/projects/spacetyper-340x230.png';

export default () => (
  <Project
    title="Spacetyper"
    link="http://www.spacetyper.com"
    githubUrl="https://github.com/domtriola/space-typer"
    imagePath={spacetyperImage}
    imageAlt="Image of Spacetyper homescreen"
    isExternal
  />
);
