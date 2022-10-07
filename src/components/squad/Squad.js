import axios from "axios";
import {useEffect, useState} from "react";
import Player from "./player/Player";
import "./Squad.css";

const Squad = () => {
	const [squad, setSquad] = useState([])
	useEffect(() => {
		fetch("https://v3.football.api-sports.io/players/squads?team=40", {
			method: "GET",
			headers: {
				"x-apisports-key" : process.env.REACT_APP_API_KEY
			}
		})
		.then(response => response.json())
		.then(data => setSquad(data.response[0].players))
		.catch(error => console.log(error))
	},[])

	const fetchData = async () => {
		const results = await axios.get("/.netlify/functions/squadapi")
		console.log(results.data.response);
		// setSquad(results.data.response)
	}

	useEffect(() => {
		fetchData();
	},[])
	
	return (
		<div className="squad">
			<Player squad={squad} />
		</div>
	)
}

export default Squad;