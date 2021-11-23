import React, { useEffect, useState } from "react";

function WithSwitching(Component, trigger, defaultValue = false, props) {
	const [state, setState] = useState(defaultValue);

	function Switcher() {
		function handleNewState() {
			setState(!state);
		}

		useEffect(() => {
			trigger?.current?.addEventListener("click", handleNewState);

			return () =>
				trigger?.current?.removeEventListener("click", handleNewState);
		}, [trigger]);

		return state && <Component {...props} onClose={handleNewState} />;
	}

	return <Switcher />;
}

export default WithSwitching;
