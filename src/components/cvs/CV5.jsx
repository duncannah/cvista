import useGoogleFont from "../../hooks/useGoogleFont.js";
import {filterHTML} from "../cv.jsx";

export default function CV5({info}) {
	useGoogleFont("Barlow", "400;500;700");

	return (
		<div className="text-neutral-800 flex flex-col font-['Barlow']">
			<div className="flex shrink-0 items-center bg-blue-500">
				{info.photo && (
					<img
						className="aspect-square h-48 border-r-4 border-white object-cover"
						src={info.photo}
						alt=""
					/>
				)}
				<div className="mx-6 flex grow items-end justify-between gap-8">
					<div>
						<h1 className="whitespace-nowrap text-5xl font-bold uppercase tracking-wider">
							{info.name
								? info.name.split(" ").map((word, index) => (
										<>
											{word}
											{index === 0 && <br />}
										</>
								  ))
								: "..."}
						</h1>
						<h2 className="text-xl font-medium">
							{info.title || "..."}
						</h2>
					</div>
					<div className="flex flex-col text-sm">
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
			</div>

			<div className="flex flex-col items-start gap-4 p-10 py-8 [&>h3]:bg-gray-800 [&>h3]:px-1 [&>h3]:py-0.5 [&>h3]:uppercase [&>h3]:text-zinc-100">
				{info.statement && (
					<div className="text-justify text-lg">{info.statement}</div>
				)}

				{info.experience.length > 0 && (
					<>
						<h3 className="text-2xl font-bold">Expérience</h3>
						{info.experience.map((experience) => (
							<div>
								<div className="mb-1 flex flex-col gap-1">
									<h4 className="font-bold">
										{experience.role}, {experience.company}
									</h4>
									<p className="text-sm uppercase">
										{experience.startDate} {" – "}{" "}
										{experience.endDate}
									</p>
								</div>
								<p className="text-sm">
									{experience.description}
								</p>
							</div>
						))}
					</>
				)}

				{info.education.length > 0 && (
					<>
						<h3 className="text-2xl font-bold">Formation</h3>

						{info.education.map((education) => (
							<div>
								<div className="mb-1 flex flex-col gap-1">
									<h4 className="font-bold">
										{education.degree} {" – "}{" "}
										{education.school}
									</h4>
									<p className="text-sm uppercase">
										{education.startDate} {" – "}
										{education.endDate}
									</p>
								</div>
								<p className="text-sm">
									{education.description}
								</p>
							</div>
						))}
					</>
				)}

				{info.languages.length > 0 && (
					<>
						<h3 className="text-2xl font-bold">Langues</h3>

						<div className="grid w-full grid-cols-2 gap-4">
							{info.languages.map((language) => (
								<div className="flex items-center justify-between gap-4">
									<h4 className="text-medium font-bold">
										{language.language}
									</h4>
									<div className="h-px grow rounded-full bg-current"></div>
									<h5 className="font-medium">
										{language.level}
									</h5>
								</div>
							))}
						</div>
					</>
				)}

				{info.skills.length > 0 && (
					<>
						<h3 className="text-2xl font-bold">Compétences</h3>
						<div
							className="prose prose-sm"
							dangerouslySetInnerHTML={{
								__html: filterHTML(info.skills),
							}}
						/>
					</>
				)}
			</div>
		</div>
	);
}
