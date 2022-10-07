import React from "react";
import styled from "styled-components";

const Card = styled.div`
	margin: 10px;
	width: 300px;
	height: 400px;
	background: #fff;
	border-radius: 6px;
	padding: 20px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-in-out;

	img {
		width: auto;
		height: auto;
		max-height: 200px;
	}
	:hover {
		img {
			transform: scale(1.1);
			transition: all 0.3s ease-in-out;
		}
		transform: scale(1.05);
		transition: all 0.3s ease-in-out;
	}
`;

function RecipeCard({ recipe }) {
	return (
		<Card>
			<h3>{recipe.title}</h3>
			<img src={recipe.image} alt={recipe.title} />
			<p>{recipe.description}</p>
			<p>{recipe.time}</p>
			<p>{` serves: ${recipe.serves}`}</p>
		</Card>
	);
}

export default RecipeCard;
