import useGoogleFont from "../../hooks/useGoogleFont.js";

export default function CV2({info}) {
	useGoogleFont("Lato", "400;500;700");

	return (
		<div
			className="text-neutral-800 flex flex-col gap-4 p-8 font-['Lato']
			 [&>h3:before]:w-2 [&>h3:before]:bg-green-300 [&>h3:before]:content-[''] [&>h3]:flex [&>h3]:gap-2
		"
		>
			<div className="flex bg-green-300">
				{info.photo && (
					<img
						className="aspect-square h-48"
						src={info.photo}
						alt=""
					/>
				)}
				<div className="flex flex-col justify-between p-4">
					<div>
						<h1 className="text-6xl font-bold">
							{info.name || "no name"}
						</h1>
						<h2 className="mb-1 text-4xl font-medium">
							{info.title || "no title"}
						</h2>
					</div>
					<div className="text-sm">
						{info.address && (
							<div className="mb-1">{info.address}</div>
						)}
						<div className="flex gap-2">
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
			</div>
			{info.statement && (
				<div className="text-center text-lg">{info.statement}</div>
			)}

			<h3 className="text-3xl font-bold">Expérience</h3>
			{info.experience.map((experience) => (
				<div>
					<div className="flex items-end justify-between">
						<div>
							<h4 className="text-lg font-bold">
								{experience.company}
							</h4>
							<h5 className="font-medium">{experience.role}</h5>
						</div>
						<p>
							{experience.startDate} {" – "} {experience.endDate}
						</p>
					</div>
					<p className="text-sm">{experience.description}</p>
				</div>
			))}

			<h3 className="text-3xl font-bold">Formation</h3>

			{info.education.map((education) => (
				<div>
					<div className="flex items-end justify-between">
						<div>
							<h4 className="text-lg font-bold">
								{education.degree}
							</h4>
							<h5 className="font-medium">{education.school}</h5>
						</div>
						<p>
							{education.startDate} {" – "} {education.endDate}
						</p>
					</div>
					<p className="text-sm">{education.description}</p>
				</div>
			))}

			<h3 className="text-3xl font-bold">Langues</h3>

			<div className="grid grid-cols-2 gap-4">
				{info.languages.map((language) => (
					<div className="flex items-center justify-between gap-4">
						<h4 className="text-medium font-bold">
							{language.language}
						</h4>
						<div className="h-px grow rounded-full bg-green-300"></div>
						<h5 className="font-medium">{language.level}</h5>
					</div>
				))}
			</div>

			<h3 className="text-3xl font-bold">Compétences</h3>
			<div>
				<ul>
					{info.skills.map((skill) => (
						<li className="text-lg">{skill}</li>
					))}
				</ul>
			</div>
		</div>
	);
}
