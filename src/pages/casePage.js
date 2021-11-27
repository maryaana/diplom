import React from "react";

const casePage = (props) => {
	let data = null;
	if (props.data) data = props.data[0];

	return <div>{data?.description}</div>;
};

export default casePage;
