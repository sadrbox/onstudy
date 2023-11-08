import React, { useRef } from "react";
import { IProduct } from "../../types";

type Props = {
	cell: string;
	data: IProduct;
};

const TableBodyCellUI = (props: Props) => {
	const cellRef = useRef<HTMLTableCellElement | null>(null);
	return (
		<td ref={cellRef} data-table-body-cell={props.cell}>
			{props.data[props.cell as keyof IProduct]}
		</td>
	);
};

export default TableBodyCellUI;
