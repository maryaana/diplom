import React, { useState, useEffect, useRef } from "react";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";

import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import { CSSTransition } from "react-transition-group";

function App() {
	let [reviews, setReviews] = useState({});
	let [menu, setMenu] = useState(false);

	useEffect(async () => {
		let response = await fetch("/getReviews", { method: "GET" });
		response = await response.json();

		if (!response.success) {
			return;
		}

		setReviews({
			...reviews,
			data: response.data,
		});
	}, []);

	function handleMenuLogic() {
		setMenu(!menu);
	}

	return (
		<>
			<div className="maxWidthWrapperHeader">
				<Header onMenuOpen={handleMenuLogic} />
			</div>
			<section className="sectionWrapper">
				<div className="headingWrapper">
					<Heading>
						<h1>
							Агентство коммуникаций
							<span className="heading_active"> digital</span>-решений
						</h1>
					</Heading>
				</div>

				<div className="subtitleWrapper">
					<HeaderBlock
						subtitle={<span>наши проекты</span>}
						description={
							<span>
								Работаем в разных областях: разработка, маркетинг, дизайн,
								автоматизация
							</span>
						}
					/>
				</div>
			</section>
			<div className="backgroundFooter">
				<div className="maxWidthWrapper">
					<Footer />
				</div>
			</div>
			<CSSTransition
				in={menu}
				timeout={300}
				classNames="menuAppearence"
				unmountOnExit
			>
				<Menu onClose={handleMenuLogic} />
			</CSSTransition>
		</>
	);
}

export default App;
