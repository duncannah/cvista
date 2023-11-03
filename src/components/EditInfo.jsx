import React, { useState, useEffect } from "react";


const EditInfo = (props) => {
	const [userData, setUserData] = useState(null);
	const [experience, setExperience] = useState({});
	// load values from localStorage
	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("userData")));
	}, []); // [] forces useEffect to only run once.

	// update localStorage when userData is updated. Sort of.
	useEffect(() => {
		if (userData !== null) {
			localStorage.setItem("userData", JSON.stringify(userData));
		}
		console.log("refreshed")
	});


	if (userData === null) {
		return (<h5>Loading data</h5>);
	}

	const updateName = () => {
		setUserData({...userData, "name": event.target.value});
	}
	const updateTitle = () => {
		setUserData({...userData, "title": event.target.value});

	}

	const submitExperience = () => {
		setUserData({...userData, "experience": [...userData.experience, experience]})
		setExperience({"company": "", "role": "", "startDate": "", "endDate": ""})
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
			<form>
				<input type="text" value={userData.name || ""} onChange={updateName} placeholder="your name" name="name"/>
				<input type="text" value={userData.title || ""} onChange={updateTitle} placeholder="your title" name="title"/>
			</form>
			<table>
				<thead>
					<tr>
						<th>Entreprise</th>
						<th>Role</th>
						<th>date de début</th>
						<th>date de fin</th>
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
				<input type="button" value="+" onClick={submitExperience}/>
			</form>
		</div>
	);


}

export default EditInfo;
