import React from 'react';
import PropTypes from 'prop-types';

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
    {menuItems.map(item => [item.text, item.link])}
  </div>
);

Menu.propTypes = menuItemsPropTypes;
Menu.defaultProps = menuItemsDefaultProps;

export default Menu;
