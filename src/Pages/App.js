import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
	const [color, setColor] = useState(1);

	const listColor = [
		{
			id: 1,
			color: "blue",
		},
		{
			id: 2,
			color: "red",
		},
		{
			id: 3,
			color: "orange",
		},
	];

	const handleClick = () => {
		setColor((prev) => (prev === 3 ? 1 : prev + 1));
	};

	return (
		<div className="main">
			<button className="btn" onClick={handleClick}>
				NEXT
			</button>
			<div className="content">
				{listColor.map((item) => {
					return (
						<div className="item" id={item.id == color ? item.color : ""}></div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
