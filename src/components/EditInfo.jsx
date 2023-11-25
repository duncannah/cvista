import React, {useState, useEffect} from "react";
import Editor from "react-simple-wysiwyg";

const MultipleItemSection = ({
	placeholder,
	userData,
	setUserData,
	title,
	itemKey,
	inputs,
}) => {
	const _addItem = () => {
		setUserData((userData) => ({
			...userData,
			[itemKey]: [...userData[itemKey], placeholder[itemKey][0]],
		}));
	};

	const _removeItem = (i) => () => {
		setUserData((userData) => ({
			...userData,
			[itemKey]: userData[itemKey].filter((item, index) => index != i),
		}));
	};

	const _handleChange = (i) => (e) => {
		setUserData((userData) => ({
			...userData,
			[itemKey]: userData[itemKey].map((item, index) =>
				index == i ? {...item, [e.target.name]: e.target.value} : item,
			),
		}));
	};

	return (
		<div className="form-field">
			<label className="form-label">
				{title}

				<button
					className="btn btn-outline-secondary btn-xs form-label-alt"
					onClick={_addItem}
				>
					+
				</button>
			</label>

			{userData[itemKey]?.map((item, index) => (
				<div
					className="form-group relative rounded-xl bg-backgroundSecondary p-4"
					key={index}
				>
					<div className="absolute right-0 top-0 p-2">
						<button
							className="btn btn-outline-error btn-xs"
							onClick={_removeItem(index)}
						>
							-
						</button>
					</div>
					<div className="form-group grid grid-cols-1 gap-4 sm:grid-cols-2">
						{inputs.map(([key, label]) => (
							<div className="form-field grow" key={key}>
								<label className="form-label">{label}</label>

								<input
									placeholder={placeholder[key]}
									value={item[key] || ""}
									name={key}
									onChange={_handleChange(index)}
									type="text"
									className="input"
								/>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default function EditInfo({placeholder}) {
	const [userData, setUserData] = useState(placeholder);
	const [dataLoaded, setDataLoaded] = useState(false);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("userData"));
		if (data != null && data != undefined) setUserData(data);

		setDataLoaded(true);
	}, []);

	useEffect(() => {
		if (dataLoaded)
			localStorage.setItem("userData", JSON.stringify(userData));

		console.log(userData);
	}, [userData]);

	const _handleChange = (e) => {
		setUserData((userData) => ({
			...userData,
			[e.target.name]: e.target.value,
		}));
	};

	const _handlePhoto = (e) => {
		if (!e.target.files[0]) {
			return setUserData((userData) => ({
				...userData,
				photo: "",
			}));
		}

		const reader = new FileReader();
		reader.readAsDataURL(e.target.files[0]);
		reader.onloadend = () => {
			setUserData((userData) => ({
				...userData,
				photo: reader.result,
			}));
		};
	};

	return (
		<div className="flex grow flex-col justify-center">
			<h3 className="text-lg font-bold">Informations</h3>
			<div className="form-group">
				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="form-field grow">
						<label className="form-label">Nom</label>

						<input
							placeholder={placeholder.name}
							value={userData.name || ""}
							onChange={_handleChange}
							name="name"
							type="text"
							className="input"
						/>
					</div>
					<div className="form-field grow">
						<label className="form-label">Titre du poste</label>

						<input
							placeholder={placeholder.title}
							value={userData.title || ""}
							onChange={_handleChange}
							name="title"
							type="text"
							className="input"
						/>
					</div>
					<div className="form-field">
						<label className="form-label">Photo</label>
						<input
							type="file"
							className="hidden"
							id="file-photo"
							accept="image/*"
							onChange={_handlePhoto}
						/>
						<label htmlFor="file-photo" className="btn">
							Choisir...
						</label>
					</div>
				</div>
				<div className="flex flex-col gap-4 sm:flex-row">
					<div className="form-field grow">
						<label className="form-label">Adresse</label>

						<input
							placeholder={placeholder.address}
							value={userData.address || ""}
							onChange={_handleChange}
							name="address"
							type="text"
							className="input"
						/>
					</div>
					<div className="form-field grow">
						<label className="form-label">
							Numéro de téléphone
						</label>

						<input
							placeholder={placeholder.phone}
							value={userData.phone || ""}
							onChange={_handleChange}
							name="phone"
							type="text"
							className="input"
						/>
					</div>
					<div className="form-field grow">
						<label className="form-label">Adresse email</label>

						<input
							placeholder={placeholder.email}
							value={userData.email || ""}
							onChange={_handleChange}
							name="email"
							type="text"
							className="input"
						/>
					</div>
				</div>
				<div className="form-field">
					<label className="form-label">Déclaration</label>
					<textarea
						className="textarea textarea-block"
						placeholder={placeholder.statement}
						value={userData.statement || ""}
						name="statement"
						onChange={_handleChange}
					/>
				</div>
				<MultipleItemSection
					{...{
						placeholder,
						userData,
						setUserData,
						itemKey: "experience",
						title: "Expérience",
						inputs: [
							["role", "Rôle"],
							["company", "Entreprise"],
							["startDate", "Date de début"],
							["endDate", "Date de fin"],
						],
					}}
				/>
				<MultipleItemSection
					{...{
						placeholder,
						userData,
						setUserData,
						itemKey: "education",
						title: "Formation",
						inputs: [
							["degree", "Diplôme"],
							["school", "École"],
							["startDate", "Date de début"],
							["endDate", "Date de fin"],
						],
					}}
				/>
				<MultipleItemSection
					{...{
						placeholder,
						userData,
						setUserData,
						itemKey: "languages",
						title: "Langues",
						inputs: [
							["language", "Langue"],
							["level", "Niveau"],
						],
					}}
				/>
				<div className="form-field">
					<label className="form-label">Compétences</label>
					<div className="prose prose-sm prose-neutral max-w-full dark:prose-invert">
						<Editor
							value={userData.skills || ""}
							name="skills"
							onChange={_handleChange}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
