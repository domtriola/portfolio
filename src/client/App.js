import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import content from '../content';
import pixelsToRem from './style/pixelsToRem';

import Header from './sections/Header';

const AppContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: ${pixelsToRem(18)}rem;
  font-family: ${props => props.theme.font.main};
  color: ${props => props.theme.color.font};
  background-color: ${props => props.theme.color.base};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header
        logo={content.logo.image}
        logoText={content.logo.text}
        menuItems={content.menu.items}
      />
    </AppContainer>
  </ThemeProvider>
);

export default App;
