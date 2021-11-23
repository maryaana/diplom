import React from 'react';
import './Menu.css';

const Menu = (props) => {
  console.log(props);
  return (
    <div className="menuWrapper" onClick={props.onClose}>
      test
    </div>
  );
};

export default Menu;
