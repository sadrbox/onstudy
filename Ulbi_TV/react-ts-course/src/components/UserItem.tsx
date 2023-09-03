import React, { FC } from "react";
import { IUser } from "../types/types";
import { Link } from "react-router-dom";

interface UserItemProps {
	user: IUser;
	onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
	return (
		<div
			onClick={() => onClick(user)}
			style={{ padding: 15, border: "1px solid gray" }}
		>
			{user.id}. {user.name} проживает в городе {user.address.city} на улице
			{user.address.street}&nbsp;
			{/* <Link to={`/user/${user.id}`}>{user.name}</Link> */}
		</div>
	);
};

export default UserItem;
