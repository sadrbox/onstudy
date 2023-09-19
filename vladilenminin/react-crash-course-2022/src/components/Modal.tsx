import React from "react";

interface ModalProps {
	title: string;
	children: React.ReactNode;
	onClose: () => void;
}
const Modal = ({ title, onClose, children }: ModalProps) => {
	return (
		<>
			<div
				onClick={onClose}
				className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
			/>
			;
			<div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
				<h1 className="text-2xl text-center mb-2"> {title} </h1>
				<h1>{children}</h1>
			</div>
		</>
	);
};

export default Modal;
