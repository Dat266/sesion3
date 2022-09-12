import Input from "../../components/Input";

function Session3() {
	return (
		<div className="container">
			<form>
				<div>
					<Input
						type="text"
						placeholder="Enter your task here ..."
						className="main-input"
					/>
				</div>
				<div>
					<div className="item">
						<Input
							type="radio"
							labelName="Clean up bedroom"
							className="check-input"
						/>
					</div>
					<div className="item">
						<Input
							type="radio"
							labelName="Buy some milk"
							className="check-input"
						/>
					</div>
					<div className="item">
						<Input type="radio" labelName="Jogging" className="check-input" />
					</div>
					<div className="item">
						<Input
							type="radio"
							labelName="Learn React"
							className="check-input"
						/>
					</div>
					<div className="item">
						<Input
							type="radio"
							labelName="Doing Excercises"
							className="check-input"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Session3;
