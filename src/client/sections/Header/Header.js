import React from 'react';
import './Header.css';
import logo from '../../logo.svg';

export default () => (
  <header className="Header">
    <img src={logo} className="Header__logo Header__logo--spin-clockwise" alt="logo" />
    <img src={logo} className="Header__logo Header__logo--spin-counterclockwise" alt="logo" />
    <h1 className="Header__title">Dominick Triola</h1>
  </header>
);
