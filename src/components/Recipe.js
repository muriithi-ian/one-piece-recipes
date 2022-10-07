import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
	max-width: 720px;
	min-height: 50vh;
	background: #fff;
	margin-top: 50px;
	display: flex;
	flex-direction: column;

	img {
		height: auto;
		width: auto;
		max-height: 300px;
	}

	p {
		padding: 0 20px;
	}
`;

function Recipe() {
	const [recipe, setRecipe] = React.useState({});
	const params = useParams();

	useEffect(() => {
		axios.get(`http://localhost:3004/recipes/${params.id}`).then((res) => {
			setRecipe(res.data);
		});
	}, []);

	return (
		<Div>
			<h1>{recipe.title}</h1>
			<img src={recipe.image} alt={recipe.title} />
			<p>{recipe.description}</p>
			<h2>Instructions</h2>
			<ol>
				{recipe.steps?.map((step, index) => {
					return <li key={index}>{step}</li>;
				})}
			</ol>
		</Div>
	);
}

export default Recipe;
