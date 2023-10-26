import { useEffect, useRef } from "react";

import CVMinimal from "../components/cvs/CVMinimal";

export default function CV(props) {
	// The SVG element lets us scale the CV content with the container

	return (
		<div
			className={`
			bg-white text-black
			w-[210mm]
			aspect-[1/1.414]
			${props.className || ""}
		`}
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 840 1188"
				preserveAspectRatio="xMinYMin meet"
			>
				<foreignObject width="100%" height="100%" xmlns="http://www.w3.org/1999/xhtml">
					{props.template === "minimal" ? (
						<CVMinimal info={props.info} />
					) : (
						<>Unknown template: {props.template}</>
					)}
				</foreignObject>
			</svg>
		</div>
	);
}
