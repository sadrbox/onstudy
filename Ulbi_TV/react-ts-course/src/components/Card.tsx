import React, { FC, useState } from "react";

export enum CardVariant {
	outline = "outline",
	primary = "primary",
}

interface CardProps {
	width?: string;
	height?: string;
	variant: CardVariant;
	children?: React.ReactNode;
	onClick: (num: number) => void;
}

export const Card: FC<CardProps> = ({
	width,
	height,
	variant,
	children,
	onClick,
}) => {
	const [state, setState] = useState(0);
	return (
		<div
			style={{
				width,
				height,
				background: "lightgray",
				border: variant === CardVariant.outline ? "2px solid red" : "",
			}}
			onClick={() => onClick(state)}
		>
			{children}
		</div>
	);
};
