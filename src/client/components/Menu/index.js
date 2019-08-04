import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import rem from '../../style/rem';

const MenuLink = styled.a`
  color: ${props => props.theme.color.font};
  text-decoration: none;
  padding: 0 ${rem(20)};
`;

export const menuItemsPropTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ),
};

export const menuItemsDefaultProps = {
  menuItems: [],
};

const Menu = ({ menuItems }) => (
  <div>
    {menuItems.map(
      item => (
        <MenuLink
          key={item.text}
          href={item.link}
        >
          {item.text}
        </MenuLink>
      ),
    )}
  </div>
);

Menu.propTypes = menuItemsPropTypes;
Menu.defaultProps = menuItemsDefaultProps;

export default Menu;
