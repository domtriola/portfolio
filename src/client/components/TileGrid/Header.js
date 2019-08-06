import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rem from '../../style/rem';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const H3 = styled.h3`
  color: ${props => props.theme.color.accent.secondary};
  font-size: ${rem(14)};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: ${rem(16)};
`;

const LinksContainer = styled.div`
  display: flex;
`;

const A = styled.a`
  margin-left: ${rem(16)};
`;

const Img = styled.img`
  width: ${rem(24)};
`;

export const headerPropTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      iconPath: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

const defaultProps = {
  title: '',
  links: [],
};

const Header = ({ title, links }) => (
  <HeaderContainer>
    <H3>{title}</H3>
    <LinksContainer>
      {
        links.map(link => (
          <A key={link.url} href={link.url}>
            <Img src={link.iconPath} alt={link.type} />
          </A>
        ))
      }
    </LinksContainer>
  </HeaderContainer>
);

Header.propTypes = headerPropTypes;
Header.defaultProps = defaultProps;

export default Header;
