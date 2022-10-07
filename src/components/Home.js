import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Div = styled.div`
	max-width: 820px;
	margin-top: 50px;
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`;

function Home({ recipes }) {
	return (
		<Div>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.id} recipe={recipe} />
			))}
		</Div>
	);
}

export default Home;
