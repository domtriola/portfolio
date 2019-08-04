import React from 'react';
import styled from 'styled-components';
import content from '../../../content';
import rem from '../../style/rem';

import TagLine from '../../components/TagLine';

const BodyContainer = styled.section`
  padding: ${rem(50)};
`;

const Body = () => (
  <BodyContainer>
    <TagLine>
      {content.tagLine}
    </TagLine>
  </BodyContainer>
);

export default Body;
