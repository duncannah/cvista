import React, { useState, useEffect, useContext } from "react";


const EditInfo = (props) => {
	const [userData, setUserData] = useState({"name": "", "title": "", "phone": "", "email": "", "experience": [], "skills": []});
	const [experience, setExperience] = useState({"company": "", "role": "", "startDate": "", "endDate": "", "description": ""});
	const [skill, setSkill] = useState("");
	// load user data from localStorage
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("userData"));
		if (data != null && data != undefined) {
			setUserData(data);
		}
	},[]); // [] forces useEffect to only run once when the page loads.


	// update localStorage when userData is updated. Sort of.
	useEffect(() => {
		if (userData.name !== "" || userData.title !== "" || userData.email !== "" || userData.phone !== "") {
			localStorage.setItem("userData", JSON.stringify(userData));
		}
	});



	const updateUser = () => {
		setUserData({...userData, [event.target.name]: event.target.value})
	}

	const submitExperience = () => {
		setUserData({...userData, "experience": [...userData.experience, experience]})
		setExperience({"company": "", "role": "", "startDate": "", "endDate": "", "description": ""})
	}

	const updateExperience = () => {
		const newField = event.target.value;
		setExperience({...experience, [event.target.name]: newField})
	}
	const deleteExperience = () => {
		const newExperiences = [];
		for (let elt in userData.experience) {
			if (elt !== event.target.id) {
				newExperiences.push(userData.experience[elt])
			}
		}
		setUserData({...userData, "experience": newExperiences})
	}

	const updateSkill = () => {
		setSkill(event.target.value);
	}

	const submitSkill = () => {
		console.log(skill)
		setUserData({...userData, "skills": [...userData.skills, skill]});
		//setSkill("");
	}

	const deleteSkill = () => {
		const newSkills = []
		for (let i in userData.skills) {
			if(i != event.target.value) {
				newSkills.push(userData.skills[i]);
			}
		}
		setUserData({...userData, "skills": newSkills});
	} 


	return (
		<div className={ (props.width === "full" ? "" : "w-1/2" ) + " flex flex-col m-auto justify-center"}>
			<h3 className="text-lg font-bold">Informations générales</h3>
			<form className="flex flex-col justify-center w-1/2 m-auto" onChange={updateUser}>
				<input type="text" value={userData.name || ""} onChange={() => {}} placeholder="your name" name="name" 
					className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"/>
				<input type="text" value={userData.title || ""} onChange={() => {}} placeholder="your title" name="title" 
					className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100" />
				<input type="email" value={userData.email || ""} onChange={() => {}} placeholder="your email" name="email" 
					className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100" />
				<input type="text" value={userData.phone || ""} onChange={() => {}} placeholder="your phone number" name="phone" 
					className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100" />
			</form>
			<h3 className="text-lg font-bold">Experiences</h3>
			{props.width === "full" ? (
				<form onChange={updateExperience} >
					<table>
						<thead>
							<tr>
								<th>Entreprise</th>
								<th>Role</th>
								<th>date de début</th>
								<th>date de fin</th>
								<th>description</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
						{userData.experience.map((experience, index) => (
							<tr>
								<td>{experience.company}</td>
								<td>{experience.role}</td>
								<td>{experience.startDate}</td>
								<td>{experience.endDate}</td>
								<td>{experience.description}</td>
								<td><button onClick={deleteExperience} id={index}
									className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
								> - </button></td>
							</tr>
						))}
							<tr class="border-top border-solid border-1">
								<td><input type="text" placeholder="Entreprise" name="company" value={experience.company} onChange={() => {}} 
									className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
								/></td>
								<td><input type="text" placeholder="Role" name="role" value={experience.role} onChange={() => {}} 
									className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
								/></td>
								<td><input type="text" placeholder="date de début" name="startDate" value={experience.startDate} onChange={() => {}} 
									className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
								/></td>
								<td><input type="text" placeholder="date de fin" name="endDate" value={experience.endDate}  onChange={() => {}}
									className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
								/></td>
								<td><input type="text" placeholder="description" name="description" value={experience.description} onChange={() => {}} 
									className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
								/></td>
								<td><input type="button" value="+" onClick={submitExperience} onChange={() => {}} 
									className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
								/></td>
							</tr>
						</tbody>
					</table>
				</form>
			) : (
				<div>
					{
						userData.experience.map((experience, index) => (
							<div className="flex flex-col rounded-25 transition ease-in-out duration-300 hover:bg-gray-100" id={index} onClick={deleteExperience}>
								<h4 id={index} className="text-lg font-bold">{experience.company}</h4>
								<h5 id={index} className="text-md font-bold">{experience.role}</h5>
								<p id={index} className="text-sm">
									{experience.startDate} - {experience.endDate}
								</p>
								<p id={index} className="text-sm">{experience.description}</p>
							</div>
						))
					}
					<form onChange={updateExperience} className="flex flex-col">
						<input type="text" placeholder="Entreprise" name="company" value={experience.company} onChange={() => {}} 
							className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
						/>
						<input type="text" placeholder="Role" name="role" value={experience.role} onChange={() => {}} 
							className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
						/>
						<input type="text" placeholder="date de début" name="startDate" value={experience.startDate} onChange={() => {}} 
							className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
						/>
						<input type="text" placeholder="date de fin" name="endDate" value={experience.endDate} onChange={() => {}} 
							className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
						/>
						<input type="text" placeholder="description" name="description" value={experience.description} onChange={() => {}} 
							className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
						/>
						<input type="button" value="+" onClick={submitExperience} onChange={() => {}} 
							className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
						/>
					</form>
				</div>
			)}

			<h3 className="text-lg font-bold">Capacités</h3>
			<form>
				<table className="w-1/2 m-auto">
					<tbody>
						{userData.skills.map((text, index) => (
							<tr>
								<td>{text}</td>
								<td><button onClick={deleteSkill} value={index}
									className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
								> - </button></td>
							</tr>
						))}
						<tr>
							<td><input type="text" onChange={updateSkill} value={skill} placeholder="capacité"
								className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
							/></td>
							<td><button onClick={submitSkill} 
								className="justify-center p-1 m-2 border-solid border-2 rounded-full transition ease-in-out duration-300 hover:bg-gray-100"
							> + </button></td>
						</tr>
					</tbody>

				</table>
					
					
			</form>
		</div>
	);


}

export default EditInfo;
