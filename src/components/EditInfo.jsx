import React, { useState, useEffect } from "react";


const EditInfo = (props) => {
	const [userData, setUserData] = useState(null);

	// load values from localStorage
	useEffect(() => {
		setUserData(JSON.parse(localStorage.getItem("userData")));
	}, []); // [] forces useEffect to only run once.

	// update localStorage when userData is updated. Sort of.
	useEffect(() => {
		if (userData !== null) {
			localStorage.setItem("userData", JSON.stringify(userData));
		}
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


	return (
		<form>
			<input type="text" value={userData.name || ""} onChange={updateName} placeholder="your name" name="name"/>
			<input type="text" value={userData.title || ""} onChange={updateTitle} placeholder="your title" name="title"/>
		</form>
	);


}

export default EditInfo;
