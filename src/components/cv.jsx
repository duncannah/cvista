import React, {useState, useEffect} from "react";

import CVMinimal from "./cvs/CVMinimal.jsx";
import CV2 from "./cvs/CV2.jsx";
import CV3 from "./cvs/CV3.jsx";
import CV4 from "./cvs/CV4.jsx";
import CV5 from "./cvs/CV5.jsx";
import CV6 from "./cvs/CV6.jsx";
import CV7 from "./cvs/CV7.jsx";

import usePrintTitle from "../hooks/usePrintTitle.js";

export const CVs = {
	minimal: CVMinimal,
	2: CV2,
	3: CV3,
	4: CV4,
	5: CV5,
	6: CV6,
	7: CV7,
};

export default function CV(props) {
	const [userData, setUserData] = useState(props.info);

	const loadSavedData = () => {
		const data = JSON.parse(localStorage.getItem("userData"));
		if (data) {
			setUserData(data);
		}
	};

	useEffect(() => {
		loadSavedData();

		setInterval(loadSavedData, 2000);
	}, []);

	usePrintTitle(userData?.name ? `${userData.name} - Curriculum Vitae` : "");

	// The SVG element lets us scale the CV content with the container

	return (
		<div
			{...props}
			className={`
			aspect-[1/1.414] w-[210mm]
			bg-white
			text-black
			${props.className || ""}
		`}
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 840 1188" // Magic number where 1rem matches 11pt font
				preserveAspectRatio="xMinYMin meet"
			>
				<foreignObject
					width="100%"
					height="100%"
					xmlns="http://www.w3.org/1999/xhtml"
				>
					{userData !== null ? (
						CVs[userData.template] ? (
							React.createElement(CVs[userData.template], {
								info: userData,
							})
						) : (
							<CVMinimal info={userData} />
						)
					) : (
						<h5>Chargement...</h5>
					)}
				</foreignObject>
			</svg>
		</div>
	);
}
