export interface IResponseData {
	todos?: ITodo[];
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
