import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
	position: fixed;
	top: 0;
	width: 70%;
	margin: auto;
	border-radius: 6px;
	padding: 15px;
	text-align: left;
	background: #2c3e50;
	z-index: 1;

	li {
		list-style: none;
		color: #fff;
		font-weight: 600;
		display: inline-block;
	}

	li > a,
	a:visited {
		padding: 15px;
		color: #fff;
		text-decoration: none;
		transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
	}

	li > a:hover {
		background: rgba(0, 0, 0, 0.1);
		transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
	}

	.nav-search {
		position: absolute;
		right: 9px;
		top: 13px;
		background: rgba(0, 0, 0, 0.1);
		-webkit-border-radius: 6px;
		-moz-border-radius: 6px;
		border-radius: 6px;
		border: none;
		padding: 5px;
		padding-left: 15px;
		outline: none;
		transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
	}

	.nav-search:focus {
		background: #fff;
		font-weight: 600;
		transition: all 0.3s ease-in-out;
		-moz-transition: all 0.3s ease-in-out;
		-webkit-transition: all 0.3s ease-in-out;
	}

	.nav-search::-webkit-input-placeholder {
		color: #fff;
	}

	.nav-search:-moz-placeholder {
		color: #fff;
	}

	.nav-search::-moz-placeholder {
		color: #fff;
	}

	.nav-search:-ms-input-placeholder {
		color: #fff;
	}
`;

function NavBar() {
	return (
		<Nav class="dark">
			<li>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/">Add Recipe</NavLink>
			</li>

			<input class="nav-search" type="text" placeholder="Search..." />
		</Nav>
	);
}

export default NavBar;
