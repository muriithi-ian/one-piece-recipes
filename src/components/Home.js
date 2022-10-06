import React from "react";
import styled from "styled-components";
import RecipeCard from "./RecipeCard";

const Div = styled.div`
	max-width: 820px;
	display: flex;
	flex-wrap: wrap;
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
			<RecipeCard />
		</Div>
	);
}

export default Home;
