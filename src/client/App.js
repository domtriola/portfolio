import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './style/theme';
import content from '../content';
import rem from './style/rem';

import Header from './sections/Header';
import Body from './sections/Body';
import Footer from './sections/Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  font-size: ${rem(18)};
  font-family: ${props => props.theme.font.main};
  color: ${props => props.theme.color.font};
  background-color: ${props => props.theme.color.base};
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header
        logo={content.logo}
        menuItems={content.menu.items}
      />
      <Body />
      <Footer />
    </AppContainer>
  </ThemeProvider>
);

export default App;
