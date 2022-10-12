import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Fixtures from "../fixtures/Fixtures";
import FixtureDetails from "../fixtures/fixture/fixtureDetails/FixtureDetails";
import Table from "../table/Table";
import Squad from "../squad/Squad";
import backgroundRed from "../../images/home-lfc.jpg";
import "./Dashboard.css";

const Dashboard = () => {

	const [fixture, setFixture] = useState({});
	
	const style = {
		backgroundImage: `url(${backgroundRed})`,
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "contain",
		backgroundAttachment: "fixed",
		backgroundColor: "black",
		minHeight: "100vh"
	}
	
	return (
		<>
			<Navbar/>
			<section style={style} className="dashboard">
			<Routes>
				<Route path="/fixtures" element={<Fixtures setFixture={setFixture} />} />
				<Route path="/fixtures/:fixtureId" element={<FixtureDetails fixture={fixture} />} />
				<Route path="/table" element={<Table />} />
				<Route path="/squad" element={<Squad />} />
			</Routes>
			</section>
		</>
	)
}

export default Dashboard;