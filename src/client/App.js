import React from 'react';
import styled from 'styled-components';
import theme from './style/theme';
import content from '../content';

import Header from './sections/Header';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
  color: rgba(255,255,255,0.87);
  background-color: ${theme.color.base};
`;

const App = () => (
  <AppContainer>
    <Header
      title={content.header.title}
    />
  </AppContainer>
);

export default App;
