import React from 'react';
import styled from 'styled-components';
import rem from '../../style/rem';

const ColorBox = styled.div`
  height: ${props => props.height};
  width: 100%;
  background-color: ${props => props.color};
`;

const Footer = () => (
  <div>
    <ColorBox
      height={rem(150)}
      color="#42303C"
    />
    <ColorBox
      height={rem(75)}
      color="#943E45"
    />
    <ColorBox
      height={rem(75)}
      color="#C74B4C"
    />
    <ColorBox
      height={rem(30)}
      color="#72A9A3"
    />
  </div>
);

export default Footer;
