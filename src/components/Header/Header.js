import React, { useEffect, useRef } from "react";
import logo from "./../../logo.png";
import "./Header.css";

const Header = (props) => {
  let wrapper = useRef(null);
  useEffect(() => {
    window.addEventListener("scroll", headerResizer);
  }, []);

  function headerResizer() {
    if (!wrapper.current) return;

    if (window.scrollY > 100) {
      wrapper.current.style.padding = "15px 0";
    } else {
      wrapper.current.style.padding = "30px 0";
    }
  }

  return (
    <div className="maxWidthWrapperHeader">
      <div className="wrapper" ref={wrapper}>
        <div className="logo">
          <img src={logo} />
        </div>
        <div className="menuButton" onClick={props.onMenuOpen}>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
