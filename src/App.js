import React, { useState, useEffect, useRef } from "react";
import ProjectsList from "./components/ProjectsList/ProjectsList";
import Header from "./components/Header/Header";
import Heading from "./components/Heading/Heading";
import ServicesList from "./components/ServicesList/ServicesList";
import HeaderBlock from "./components/HeaderBlock/HeaderBlock";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

function App() {
	let [reviews, setReviews] = useState({});
	let [menu, setMenu] = useState(false);

	let ref1 = useRef(null);
	let ref2 = useRef(null);
	let ref3 = useRef(null);

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
			<div className="maxWidthWrapper">
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
					<Menu />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default App;
