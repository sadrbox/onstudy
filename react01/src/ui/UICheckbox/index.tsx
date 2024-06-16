import React, { HTMLAttributes } from "react";

interface CheckboxProps {
	label?: string;
	checked?: boolean;
	onChange: () => void;
}

const UICheckbox: React.FC<CheckboxProps> = ({
	label = "",
	checked,
	onChange,
}) => {
	const handleChange = () => {
		onChange();
	};
	return (
		<>
			<label>
				<input type="checkbox" onChange={handleChange} checked={checked} />
				{label}
			</label>
		</>
	);
};

export default UICheckbox;
