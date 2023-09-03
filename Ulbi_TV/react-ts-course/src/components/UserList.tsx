import React, { FC } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";

interface UserListProps {
	users: IUser[];
	onClick: (user: IUser) => void;
}

const UserList: FC<UserListProps> = ({ users, onClick }) => {
	return (
		<div>
			{users.map((user) => (
				<UserItem onClick={() => onClick(user)} key={user.id} user={user} />
			))}
		</div>
	);
};

export default UserList;
