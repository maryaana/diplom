import React from 'react';
import './Header.css';

const Header = (props) => {
  return (
    <div className="wrapper">
      <div className="logo">logo</div>
      <div className="menu" onClick={props.onMenuOpen}>
        menu
      </div>
    </div>
  );
};

export default Header;
