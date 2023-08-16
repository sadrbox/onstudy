import React from "react";

interface CardProps {
	width?: string;
	height?: string;
}

export const Card = ({ width, height }: CardProps) => {
	return <div style={{ width, height, background: "lightgray" }}>Card</div>;
};
