import React, { useState, useEffect } from "react";
import CVMinimal from "./cvs/CVMinimal.jsx";
export default function CV(props) {
	const [userData, setUserData] = useState(props.info);

	// load user data from localStorage
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("userData"));
		if (data) {
			setUserData(data);
		}
	},[]); // [] forces useEffect to only run once when the page loads.

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
					{ userData !== null ? 
						( props.template === "minimal" ? 
							( <CVMinimal info={userData} /> ) : 
							( <>Unknown template: {props.template}</> ) ) :
						( <h5>loading data</h5> )
						// This is aweful.
					}
					
				</foreignObject>
			</svg>
		</div>
	);
}
