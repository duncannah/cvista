import useGoogleFont from "../../hooks/useGoogleFont.js";

export default function CV4({info}) {
	useGoogleFont("IBM Plex Sans", "400;500;700");

	return (
		<div className="text-neutral-800 flex min-h-full font-['IBM_Plex_Sans']">
			<div className="flex w-[300px] shrink-0 flex-col gap-8 bg-emerald-900 px-8 py-16 text-zinc-100 shadow-black/50 text-shadow">
				<div className="flex flex-col items-center gap-4 text-center">
					{info.photo && (
						<img
							className="aspect-square h-36 rounded-full shadow-xl"
							src={info.photo}
							alt=""
						/>
					)}
					<div>
						<h1 className="text-4xl font-bold">
							{info.name || "no name"}
						</h1>
						<h2 className="mb-1 text-2xl font-medium">
							{info.title || "no title"}
						</h2>
					</div>
				</div>

				<div>
					<h3 className="mb-2 font-bold">Contact</h3>
					<div className="flex flex-col gap-2 text-sm">
						{info.address && <div>{info.address}</div>}
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

				<div>
					<h3 className="mb-2 font-bold">Langues</h3>
					<div className="flex flex-col gap-2">
						{info.languages.map((language) => (
							<div className="flex justify-between gap-4">
								<h4 className="font-medium">
									{language.language}
								</h4>
								<h5 className="text-right">{language.level}</h5>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-4 px-8 py-16 [&>h3:before]:w-2 [&>h3:before]:bg-emerald-900 [&>h3:before]:content-[''] [&>h3]:flex [&>h3]:gap-2">
				<h3 className="text-3xl font-bold">Profil</h3>

				{info.statement && (
					<div className=" text-lg">{info.statement}</div>
				)}

				<h3 className="text-3xl font-bold">Expérience</h3>
				{info.experience.map((experience) => (
					<div>
						<div className="flex items-end justify-between">
							<div>
								<h4 className="text-lg font-bold">
									{experience.company}
								</h4>
								<h5 className="font-medium">
									{experience.role}
								</h5>
							</div>
							<p className="text-sm">
								{experience.startDate} {" – "}
								{experience.endDate}
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
								<h5 className="font-medium">
									{education.school}
								</h5>
							</div>
							<p className="text-sm">
								{education.startDate} {" – "}
								{education.endDate}
							</p>
						</div>
						<p className="text-sm">{education.description}</p>
					</div>
				))}

				<h3 className="text-3xl font-bold">Compétences</h3>
				<div>
					<ul>
						{info.skills.map((skill) => (
							<li className="text-lg">{skill}</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
