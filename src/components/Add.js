import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
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
	}
	#delete:hover {
		cursor: not-allowed;
	}
`;
function Add() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [serves, setServes] = useState(1);
	const [time, setTime] = useState("");
	const [image, setImage] = useState("");
	const [step, setStep] = useState("");
	const [steps, setSteps] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(
				"http://localhost:3004/recipes",
				{
					title: title,
					description: description,
					serves: serves,
					time: time,
					image: image,
					steps: steps,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				}
			)
			.then((res) => {
				Navigate(`/${res.data.id}`);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Div>
			<h1>Add recipe</h1>
			<form action="submit">
				<span>
					<label htmlFor="title">Title:</label> &nbsp;
					<input
						type="text"
						name="title"
						id="title"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
					/>
				</span>
				<span>
					<label htmlFor="description">Description:</label> &nbsp;
					<textarea
						type="text"
						name="description"
						id="description"
						onChange={(e) => setDescription(e.target.value)}
						value={description}
					/>
				</span>
				<span>
					<label htmlFor="serve">Serve:</label> &nbsp;
					<input
						type="number"
						min={1}
						name="serve"
						id="serve"
						onChange={(e) => setServes(e.target.value)}
						value={serves}
					/>
				</span>
				<span>
					<label htmlFor="time">Time:</label> &nbsp;
					<input
						type="text"
						name="time"
						id="time"
						value={time}
						onChange={(e) => setTime(e.target.value)}
					/>
				</span>
				<span>
					<label htmlFor="image">Image:</label> &nbsp;
					<input
						type="text"
						name="image"
						id="image"
						onChange={(e) => setImage(e.target.value)}
						value={image}
					/>
				</span>
				<div className="steps">
					<label htmlFor="steps">Steps</label>
					<ul>
						{steps.map((step, index) => (
							<li
								key={index}
								id="delete"
								onClick={() => setSteps(steps.filter((_, i) => i !== index))}
							>
								{step}
							</li>
						))}
					</ul>
					<input
						type="text"
						name="step"
						id="step"
						onChange={(e) => setStep(e.target.value)}
						value={step}
					/>
					<button
						type="none"
						onClick={(e) => {
							e.preventDefault();
							setStep("");
							setSteps([...steps, step]);
						}}
					>
						add step
					</button>
				</div>

				<button id="submit" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</Div>
	);
}

export default Add;
