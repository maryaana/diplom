import React, { useEffect } from "react";
import { useLocation, useMatch, useParams } from "react-router";

const WithDataRendering = (Component, content, pattern) => {
	let match = useMatch(pattern);
	return (
		<Component data={content?.filter((c) => c.id === +match?.params.id)} />
	);
};

export default WithDataRendering;
