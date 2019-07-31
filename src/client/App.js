import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  font-size: 40px;
  font-family: 'Poppins', sans-serif;
`;

const App = () => (
  <AppContainer>Hello</AppContainer>
);

export default App;
