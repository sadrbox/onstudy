import { TDataItem } from "./index";

export interface IResponseData {
	todos?: TDataItem[];
	total?: number;
	skip?: number;
	limit?: number;
}
export interface ITodo {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}
