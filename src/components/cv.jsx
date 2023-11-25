import React, {useState, useEffect} from "react";

import CV1 from "./cvs/CV1.jsx";
import CV2 from "./cvs/CV2.jsx";
import CV3 from "./cvs/CV3.jsx";
import CV4 from "./cvs/CV4.jsx";
import CV5 from "./cvs/CV5.jsx";
import CV6 from "./cvs/CV6.jsx";
import CV7 from "./cvs/CV7.jsx";

import usePrintTitle from "../hooks/usePrintTitle.js";

export const CVs = {
	1: CV1,
	2: CV2,
	3: CV3,
	4: CV4,
	5: CV5,
	6: CV6,
	7: CV7,
};

export const filterHTML = (html) => {
	if (typeof DOMParser === "undefined") return html;

	const doc = new DOMParser().parseFromString(html, "text/html");
	doc.body
		.querySelectorAll(
			"*:not(a):not(b):not(i):not(u):not(strike):not(ul):not(ol):not(li):not(div)",
		)
		.forEach((node) => {
			node.replaceWith(node.textContent);
		});

	doc.body
		.querySelectorAll("*:not(a)")
		.forEach((node) =>
			[...node.attributes].forEach((attr) =>
				node.removeAttribute(attr.name),
			),
		);

	return doc.body.innerHTML || "";
};

export default function CV({placeholder, ...props}) {
	const [userData, setUserData] = useState(placeholder);

	const loadSavedData = () => {
		const data = JSON.parse(localStorage.getItem("userData"));
		if (data) setUserData({...placeholder, ...data});
	};

	useEffect(() => {
		loadSavedData();

		setInterval(loadSavedData, 500);
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
					{userData ? (
						CVs[userData.template] ? (
							React.createElement(CVs[userData.template], {
								info: userData,
							})
						) : (
							<CV1 info={userData} />
						)
					) : (
						<h5>Chargement...</h5>
					)}
				</foreignObject>
			</svg>
		</div>
	);
}
