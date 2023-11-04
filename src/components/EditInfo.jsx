import React, { useState, useEffect } from "react";


const EditInfo = (props) => {
	const [userData, setUserData] = useState({"name": "", "title": "", "email": "", "phone": "", "experience": []});
	const [experience, setExperience] = useState({});
	// load values from localStorage
	useEffect(() => {
		if (localStorage.getItem("userData")) {
			setUserData(JSON.parse(localStorage.getItem("userData")));
		}
	}, []); // [] forces useEffect to only run once.

	// update localStorage when userData is updated. Sort of.
	useEffect(() => {
		if (userData !== null) {
			localStorage.setItem("userData", JSON.stringify(userData));
		}
		console.log("refreshed")
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
			if (elt !== event.target.value) {
				newExperiences.push(userData.experience[elt])
			}
		}
		setUserData({...userData, "experience": newExperiences})
	}


	return (
		<div class="center">
			<form onChange={updateUser}>
				<input type="text" value={userData.name || ""} placeholder="your name" name="name"/>
				<input type="text" value={userData.title || ""} placeholder="your title" name="title"/>
				<input type="email" value={userData.email || ""} placeholder="your email" name="email"/>
				<input type="text" value={userData.phone || ""} placeHolder="your phone number" name="phone"/>
			</form>
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
						<td><button onClick={deleteExperience} value={index}> - </button></td>
					</tr>
				))}
				</tbody>
			</table>
			<form onChange={updateExperience}>
				<input type="text" placeholder="Entreprise" name="company" value={experience.company}/>
				<input type="text" placeholder="Role" name="role" value={experience.role}/>
				<input type="text" placeholder="date de début" name="startDate" value={experience.startDate}/>
				<input type="text" placeholder="date de fin" name="endDate" value={experience.endDate}/>
				<input type="text" placeholder="description" name="description" value={experience.description}/>
				<input type="button" value="+" onClick={submitExperience}/>
			</form>
		</div>
	);


}

export default EditInfo;
