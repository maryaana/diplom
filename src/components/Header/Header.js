import React from "react";
import logo from "./../../logo.png";
import "./Header.css";

const Header = (props) => {
	return (
		<div className="wrapper">
			<div className="logo">
				<img src={logo} />
			</div>
			<div className="menuButton">
				<div className="menuLine"></div>
				<div className="menuLine"></div>
			</div>
		</div>
	);
};

export default Header;
