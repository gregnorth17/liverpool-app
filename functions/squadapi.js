const axios = require("axios");

exports.handler = async (event, context) => {
	const url = "https://v3.football.api-sports.io/players/squads?team=40"
	const {data} = await axios.get(url, {
		headers : {
			"x-apisports-key" : process.env.REACT_APP_API_KEY
		}
	})
	try {
		return {
			statusCode: 200,
			body: JSON.stringify(data)
		}
	} catch (error) {
		console.log(error)
	}
}