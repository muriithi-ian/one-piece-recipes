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

function Home() {
	return (
		<Div>
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
			<RecipeCard />
		</Div>
	);
}

export default Home;
