import "./Input.module.css";
function Input({ type, nameInput, placeholder, className, value, labelName }) {
	return (
		<div>
			<input
				type={type}
				name={nameInput}
				placeholder={placeholder}
				className={className}
				value={value}
			/>
			<label for={nameInput}>{labelName}</label>
		</div>
	);
}

export default Input;
