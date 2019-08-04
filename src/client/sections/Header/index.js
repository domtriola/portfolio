import React from 'react';
import PropTypes from 'prop-types';
import Menu, { menuItemsPropTypes, menuItemsDefaultProps } from '../../components/Menu';

const propTypes = {
  logo: PropTypes.string.isRequired,
  logoText: PropTypes.string.isRequired,
  ...menuItemsPropTypes,
};

const defaultProps = {
  ...menuItemsDefaultProps,
};

const Header = ({ logo, logoText, menuItems }) => (
  <header>
    <h1>
      {logo}
      {logoText}
    </h1>
    <Menu menuItems={menuItems} />
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
