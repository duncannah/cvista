import useGoogleFont from "../../hooks/useGoogleFont.js";
import {filterHTML} from "../CV.jsx";

function Section({title, children}) {
	return (
		<div className="flex gap-4">
			<h3 className="w-40 shrink-0 text-sm font-medium text-opacity-70">
				{title}
			</h3>
			<div className="flex grow flex-col gap-4">{children}</div>
		</div>
	);
}

export default function CV3({info}) {
	useGoogleFont("IBM Plex Sans", "400;500;700");
	useGoogleFont("Familjen Grotesk", "400;500;700");

	return (
		<div className="text-neutral-800 flex flex-col gap-8 p-8 font-['IBM_Plex_Sans']">
			<div className="absolute left-0 top-0 z-[-1] flex h-56 w-full bg-gradient-to-b from-violet-700 to-sky-500 blur-[128px]" />
			<div className="flex flex-col items-center gap-4 font-['Familjen_Grotesk'] drop-shadow-md">
				<div className="flex flex-col items-center">
					{info.photo && (
						<img
							className="aspect-square h-24 rounded-full object-cover"
							src={info.photo}
							alt=""
						/>
					)}
					<h1 className="text-6xl font-bold">{info.name || "..."}</h1>
					<h2 className="text-3xl">{info.title || "..."}</h2>
				</div>
				<div className="text-sm">
					{info.address && <div className="mb-1">{info.address}</div>}
					<div className="flex justify-center gap-2">
						{info.phone && (
							<a href={`tel:${info.phone}`}>{info.phone}</a>
						)}
						{info.email && (
							<a href={`mailto:${info.email}`}>{info.email}</a>
						)}
						{info.website && (
							<a href={info.website}>{info.website}</a>
						)}
					</div>
				</div>
			</div>
			{info.statement && (
				<div className="text-center text-lg">{info.statement}</div>
			)}

			<Section title="Expérience">
				{info.experience.map((experience) => (
					<div className="flex grow flex-col gap-1">
						<div className="flex grow justify-between">
							<h4 className="font-bold">
								{experience.role}, {experience.company}
							</h4>
							<p className="text-sm">
								{experience.startDate} {" – "}
								{experience.endDate}
							</p>
						</div>
						<p className="text-sm">{experience.description}</p>
					</div>
				))}
			</Section>

			<Section title="Formation">
				{info.education.map((education) => (
					<div className="flex grow flex-col gap-1">
						<div className="flex grow justify-between">
							<h4 className="font-bold">
								{education.degree}, {education.school}
							</h4>
							<p className="text-sm">
								{education.startDate} {" – "}
								{education.endDate}
							</p>
						</div>
						<p className="text-sm">{education.description}</p>
					</div>
				))}
			</Section>

			<Section title="Langues">
				<div className="grid grid-cols-2 gap-4">
					{info.languages.map((language) => (
						<div className="flex items-center justify-between gap-4">
							<h4 className="text-medium font-bold">
								{language.language}
							</h4>
							<div className="h-px grow rounded-full bg-gray-300"></div>
							<h5 className="font-medium">{language.level}</h5>
						</div>
					))}
				</div>
			</Section>

			<Section title="Compétences">
				<div
					className="prose prose-sm"
					dangerouslySetInnerHTML={{
						__html: filterHTML(info.skills),
					}}
				/>
			</Section>
		</div>
	);
}
