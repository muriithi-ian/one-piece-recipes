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
		width: 100%;
		height: auto;
	}
`;

function RecipeCard() {
	return (
		<Card>
			<h3>Recipe Title</h3>
			<img
				src="https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg"
				alt=""
			/>
			<p>Recipe Description</p>
			<p>time</p>
			<p>serves</p>
		</Card>
	);
}

export default RecipeCard;
