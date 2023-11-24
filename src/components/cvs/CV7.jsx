import useGoogleFont from "../../hooks/useGoogleFont.js";

function Section({title, children}) {
	return (
		<div className="flex gap-4">
			<h3 className="w-36 shrink-0 text-sm uppercase tracking-widest opacity-70">
				{title}
			</h3>
			<div className="flex grow flex-col gap-4">{children}</div>
		</div>
	);
}

export default function CV7({info}) {
	useGoogleFont("Playfair Display", "400;900");
	useGoogleFont("Epilogue", "400;500;700");

	return (
		<div className="flex min-h-full bg-zinc-950 p-6 font-['Epilogue'] text-white">
			<div className="flex min-h-full flex-col gap-12 border border-white p-6">
				<div className="flex justify-between gap-8">
					<h2>{info.title || "no title"}</h2>
					<div>
						{info.address && <div>{info.address}</div>}
						<div className="flex flex-wrap justify-end gap-4">
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
					</div>
				</div>
				<div className="flex items-end gap-8 font-['Playfair_Display']">
					{info.photo && (
						<img
							className="aspect-square h-32"
							src={info.photo}
							alt=""
						/>
					)}
					<h1 className="text-6xl font-bold uppercase">
						{info.name
							? info.name.split(" ").map((word, index) => (
									<>
										{word}
										{index === 0 && <br />}
									</>
							  ))
							: "no name"}
					</h1>
				</div>
				{info.statement && (
					<Section title="Profil">
						<p
							className="font-['Playfair_Display'] text-lg
"
						>
							{info.statement}
						</p>
					</Section>
				)}

				<Section title="Expérience">
					{info.experience.map((experience) => (
						<div className="flex grow flex-col gap-1">
							<div className="flex grow justify-between">
								<h4 className="font-bold">
									{experience.role}, {experience.company}
								</h4>
								<p className="text-sm opacity-50">
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
								<p className="text-sm opacity-50">
									{education.startDate} {" – "}{" "}
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
								<h5 className="font-medium">
									{language.level}
								</h5>
							</div>
						))}
					</div>
				</Section>

				<Section title="Compétences">
					<div>
						<ul>
							{info.skills.map((skill) => (
								<li className="text-lg">{skill}</li>
							))}
						</ul>
					</div>
				</Section>
			</div>
		</div>
	);
}
