import React, { useEffect } from "react";
import { useLocation, useMatch, useParams } from "react-router";

const WithDataRendering = (Component, content) => {
	let match = useMatch("cases/info/:id");
	return (
		<Component data={content?.filter((c) => c.id === +match?.params.id)} />
	);
};

export default WithDataRendering;
