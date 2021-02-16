import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rem from '../../style/rem';
import Logo, { logoPropTypes } from '../../components/Logo';
import Menu, { menuItemsPropTypes, menuItemsDefaultProps } from '../../components/Menu';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${rem(20)};
  width: 100%;
  height: fit-content;
`;

const propTypes = {
  logo: PropTypes.shape({
    ...logoPropTypes,
  }).isRequired,
  ...menuItemsPropTypes,
};

const defaultProps = {
  ...menuItemsDefaultProps,
};

const Header = ({
  logo,
  menuItems,
}) => (
  <HeaderContainer>
    <Logo
      image={logo.image}
      text={logo.text}
    />
    <Menu menuItems={menuItems} />
  </HeaderContainer>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
