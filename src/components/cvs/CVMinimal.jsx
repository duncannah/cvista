/**
 * A minimal CV template
 */

export default function CVMinimal({ info }) {
	return (
		<div className="p-4 flex flex-col gap-8">
			<div>
				<h1 className="text-3xl font-bold">{info.name}</h1>
				<h2 className="text-xl font-bold">{info.title}</h2>
				<ul>
					{info.address && <li className="text-sm">{info.address}</li>}
					{info.phone && <li className="text-sm">{info.phone}</li>}
					{info.email && <li className="text-sm">{info.email}</li>}
					{info.website && <li className="text-sm">{info.website}</li>}
				</ul>
			</div>
			<div>
				<h3 className="text-xl font-bold">Experience</h3>
				{info.experience.map((experience) => (
					<div>
						<h4 className="text-lg font-bold">{experience.company}</h4>
						<h5 className="text-md font-bold">{experience.role}</h5>
						<p className="text-sm">
							{experience.startDate} - {experience.endDate}
						</p>
						<p className="text-sm">{experience.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
