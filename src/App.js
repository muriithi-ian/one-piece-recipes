import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import styled from "styled-components";

const Div = styled.div`
	position: relative;
	text-align: center;
	min-height: 100vh;
	background: rgb(26, 49, 95);
	background: -webkit-gradient(
		linear,
		left top,
		left bottom,
		color-stop(0%, rgba(26, 49, 95, 1)),
		color-stop(10%, rgba(26, 49, 95, 1)),
		color-stop(24%, rgba(29, 108, 141, 1)),
		color-stop(37%, rgba(41, 136, 151, 1)),
		color-stop(77%, rgba(39, 45, 100, 1)),
		color-stop(90%, rgba(26, 49, 95, 1)),
		color-stop(100%, rgba(26, 49, 95, 1))
	);
	filter: gradient(start= "#1a315f", end= "#1a315f", GradientType=0);
	display: flex;

	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

function App() {
	return (
		<Div className="app">
			<NavBar />
			<Home />
			<Routes>
				{/* <Route exact path="/">
					<Home />
				</Route> */}
			</Routes>
		</Div>
	);
}

export default App;
