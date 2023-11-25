import useGoogleFont from "../../hooks/useGoogleFont.js";
import {filterHTML} from "../cv.jsx";

function Section({title, children}) {
	return (
		<div className="flex flex-col gap-2">
			<h3 className="text-2xl font-bold uppercase">{title}</h3>
			<div className="flex grow flex-col gap-4">{children}</div>
		</div>
	);
}

export default function CV6({info}) {
	useGoogleFont("Syne", "400;500;700");

	return (
		<div className="min-h-full bg-teal-50 p-8 font-['Syne'] text-green-900 ">
			<div className="mb-4 min-h-[300px]">
				<div>
					{info.photo && (
						<div
							style={{
								filter: "drop-shadow(4px 16px 0px rgba(20, 83, 45, 0.25)",
							}}
						>
							<img
								className="float-right -mr-8 -mt-8 aspect-square h-[300px] object-cover"
								src={info.photo}
								alt=""
								style={{
									clipPath: "url(#profile_clip)",
									shapeOutside:
										"polygon(100% 0, 0 0, 10% 50%, 50% 70%, 75% 100%, 100% 100%)",
									shapeMargin: "2rem",
								}}
							/>
						</div>
					)}
					<h1 className="text-7xl font-bold">{info.name || "..."}</h1>
					<h2 className="text-2xl tracking-wider">
						{info.title || "..."}
					</h2>
					{info.statement && (
						<div className="mt-4 text-xl">{info.statement}</div>
					)}
				</div>
			</div>
			<div className="flex gap-4">
				<div className="flex flex-col gap-4">
					{info.experience.length > 0 && (
						<Section title="Expérience">
							{info.experience.map((experience) => (
								<div>
									<div className="mb-1 flex flex-col">
										<h4 className="font-bold">
											{experience.role},{" "}
											{experience.company}
										</h4>
										<p className="text-sm uppercase opacity-60">
											{experience.startDate} {" – "}
											{experience.endDate}
										</p>
									</div>
									<p className="text-sm">
										{experience.description}
									</p>
								</div>
							))}
						</Section>
					)}

					{info.education.length > 0 && (
						<Section title="Formation">
							{info.education.map((education) => (
								<div>
									<div className="mb-1 flex flex-col">
										<h4 className="font-bold">
											{education.degree},{" "}
											{education.school}
										</h4>
										<p className="text-sm uppercase opacity-60">
											{education.startDate} {" – "}
											{education.endDate}
										</p>
									</div>
									<p className="text-sm">
										{education.description}
									</p>
								</div>
							))}
						</Section>
					)}

					{info.skills.length > 0 && (
						<Section title="Compétences">
							<div
								className="prose prose-sm text-current"
								dangerouslySetInnerHTML={{
									__html: filterHTML(info.skills),
								}}
							/>
						</Section>
					)}
				</div>
				<div className="flex w-56 shrink-0 flex-col gap-4">
					<Section title="Contact">
						<div className="flex flex-col gap-2 text-sm">
							{info.address && <div>{info.address}</div>}
							{info.phone && (
								<a href={`tel:${info.phone}`}>{info.phone}</a>
							)}
							{info.email && (
								<a href={`mailto:${info.email}`}>
									{info.email}
								</a>
							)}
							{info.website && (
								<a href={info.website}>{info.website}</a>
							)}
						</div>
					</Section>

					{info.languages.length > 0 && (
						<Section title="Langues">
							{info.languages.map((language) => (
								<div className="flex justify-between gap-4">
									<h4 className="font-medium">
										{language.language}
									</h4>
									<h5 className="text-right">
										{language.level}
									</h5>
								</div>
							))}
						</Section>
					)}
				</div>
			</div>
			<svg
				className="pointer-events-none absolute inset-0"
				width="840"
				height="1188"
				viewBox="0 0 840 1188"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath id="profile_clip">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M298.09 257.918C298.894 256.924 299.193 256.044 300 255.049V0H7.09411C0.901998 0 -1.46419 24.3672 0.901984 57.2132C3.68555 95.8534 20.0425 133.719 47.0225 162.439C60.8462 177.154 80.2665 183.601 99.8764 190.111C115.577 195.323 131.399 200.575 144.568 210.144C158.651 220.377 169.034 236.273 179.22 251.867C194.631 275.46 209.59 298.362 236.23 299.92C262.854 301.477 280.223 280.005 298.09 257.918Z"
							fill="black"
						/>
					</clipPath>
				</defs>
				<path
					d="M864.083 1067.24C884.848 1095.33 917.5 1073 928.4 1149.93V1215.78H701.758C671.808 1209.79 662.978 1184.95 662.027 1156.91C661.528 1142.19 667.936 1125.54 681.935 1118.54C690.137 1114.44 698.711 1113.14 709.84 1111.73C718.975 1110.58 725.999 1113.05 733.406 1110.97C761.157 1103.16 765 1103.16 765 1076.5C765 1068.72 759.085 1047.14 770 1035C778.154 1025.93 787.901 1023 798.829 1023C829.619 1023 847.304 1044.54 864.083 1067.24Z"
					fill="#14532D"
					fillOpacity="0.25"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M460.512 934.136C502.383 901.287 565.4 903.653 616.624 918.087C672.664 933.877 728.766 966.398 756.566 1017.55C784.265 1068.53 778.823 1132.51 763.561 1188.48C749.988 1238.25 698.713 1266.57 676.025 1312.91C651.015 1363.98 680.088 1484.46 624.489 1472.5C537.213 1453.72 549.217 1276.6 460.512 1266.55C385.2 1258.02 392.251 1443.31 316.67 1437.62C255.228 1433 336.71 1319.02 340.89 1257.55C342.487 1234.05 346.893 1207.93 333.61 1188.48C292 1127.56 144.09 1090.8 185.118 1029.48C227.37 966.341 329.941 1111.53 401.734 1086.67C454.118 1068.54 416.897 968.353 460.512 934.136Z"
					fill="#14532D"
					fillOpacity="0.1"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M-92.7679 1293.45C-123.944 1250.32 -119.099 1187.44 -102.662 1136.83C-84.6785 1081.45 -49.9751 1026.67 2.23565 1000.91C54.2579 975.237 117.981 983.192 173.305 1000.64C222.505 1016.17 248.786 1068.52 294.191 1093.01C344.243 1120.01 465.768 1095.7 451.63 1150.78C429.436 1237.25 252.922 1218.29 239.389 1306.53C227.899 1381.45 413.327 1381.69 404.668 1456.99C397.629 1518.21 286.946 1432.3 225.684 1425.71C202.269 1423.19 176.342 1417.76 156.387 1430.26C93.8759 1469.44 51.3211 1615.79 -8.3313 1572.38C-69.7614 1527.68 79.3521 1430.9 57.3402 1358.19C41.279 1305.13 -60.2935 1338.38 -92.7679 1293.45Z"
					fill="#14532D"
					fillOpacity="0.1"
				/>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M939.724 781.545C876.728 789.714 813.051 882.093 763.284 842.616C708.356 799.044 790.731 698.123 757.044 636.634C724.735 577.661 604.987 594.697 591.38 528.844C579.194 469.87 676.072 446.52 707.097 394.906C742.126 336.63 724.835 245.23 783.012 210.037C839.853 175.652 927.604 187.249 977.079 231.582C1028.6 277.748 979.084 378.812 1027.03 428.686C1071.26 474.706 1167.86 424.607 1209.3 473.165C1247.58 518.034 1229.23 589.822 1212.87 646.491C1195.98 704.998 1170.44 769.911 1115.85 796.902C1061.93 823.561 999.374 773.811 939.724 781.545Z"
					fill="#124A2C"
					fillOpacity="0.1"
				/>
			</svg>
		</div>
	);
}
