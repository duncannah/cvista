import {useEffect} from "react";

export default (fontFamily, fontWeight) => {
	useEffect(() => {
		const link = document.createElement("link");
		link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}:wght@${fontWeight}&display=swap`;
		link.rel = "stylesheet";
		document.head.appendChild(link);

		return () => {
			document.head.removeChild(link);
		};
	}, [fontFamily, fontWeight]);
};
