import React from 'react';
import styled from 'styled-components';
import content from '../../../content';
import rem from '../../style/rem';

import TagLine from '../../components/TagLine';
import TileGrid from '../../components/TileGrid';
import Tile from '../../components/TileGrid/Tile';

const BodyContainer = styled.section`
  padding: ${rem(50)};
`;

const Body = () => (
  <BodyContainer>
    <TagLine>
      {content.tagLine}
    </TagLine>
    <TileGrid>
      {[
        <Tile key="aboutBlurb" text={content.aboutBlurb} />,
        ...content.projects.map(
          project => <Tile key={project.title} project={project} />,
        ),
      ]}
    </TileGrid>
  </BodyContainer>
);

export default Body;
