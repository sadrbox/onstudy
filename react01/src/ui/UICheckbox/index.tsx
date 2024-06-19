import React, { HTMLAttributes } from "react";

interface CheckboxProps {
	checked?: boolean;
	onChange: () => void;
}

const UICheckbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
	const handleChange = () => {
		onChange();
	};
	return (
		<>
			<input type="checkbox" onChange={handleChange} checked={checked} />
		</>
	);
};

export default UICheckbox;
