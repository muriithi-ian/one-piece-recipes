import React from "react";
import styled from "styled-components";

const Div = styled.div`
	min-width: 720px;
	min-height: 50vh;
	background: #fff;
	margin-top: 50px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border-radius: 6px;
	shadow: 0 0 10px rgba(0, 0, 0, 0.1);

	form {
		display: flex;
		flex-direction: column;
		gap: 5px;
		place-items: center;
	}
	input,
	textarea {
		border: 1px solid #ccc;
		border-radius: 5px;
	}

	input:focus,
	textarea:focus {
		outline: none;
		border: 1px solid #2c3e50;
	}

	button {
		color: #fff;
		background: #2c3e50;
		width: 100px;
		border-radius: 5px;
	}

	#submit {
		margin-top: 10px;
	}

	.steps {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}
`;
function Add() {
	return (
		<Div>
			<h1>Add recipe</h1>
			<form action="submit">
				<span>
					<label htmlFor="title">Title:</label> &nbsp;
					<input type="text" name="title" id="title" />
				</span>
				<label htmlFor="description">Description</label>
				<textarea type="text" name="description" id="description" />
				<span>
					<label htmlFor="image">Image:</label> &nbsp;
					<input type="text" name="image" id="image" />
				</span>
				<div className="steps">
					<label htmlFor="steps">Steps</label>
					<button
						type="none"
						onClick={(e) => {
							e.preventDefault();
						}}
					>
						add step
					</button>
				</div>

				<button id="submit">Submit</button>
			</form>
		</Div>
	);
}

export default Add;
