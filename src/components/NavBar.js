import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
	return (
		<nav class="dark">
			<li>
				<NavLink to="/">Home</NavLink>
			</li>

			<input class="nav-search" type="text" placeholder="Search..." />
		</nav>
	);
}

export default NavBar;
