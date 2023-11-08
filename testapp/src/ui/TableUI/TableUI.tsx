import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { render } from "react-dom";
import { IProduct, CProduct } from "../../types";
import axios from "axios";
import { CgOverflow } from "react-icons/cg";
import TableBodyCellUI from "./TableBodyCellUI";
// import { IProducts, CProduct } from '../types/index';

type Props = {};

const TableUI = (props: Props) => {
	useLayoutEffect(() => {
		// setWidthRow();
	});

	const [products, setProducts] = useState<IProduct[] | []>([]);

	// console.log(keysOfProps);

	useLayoutEffect(() => {

		await fetchData();
		await setTableHeaders();
		// console.log(CProduct);
	}, []);

	const fetchData = async () => {
		await axios
			.get("https://dummyjson.com/products")
			.then((res) => {
				setProducts(res.data.products);
				// console.log(typeof res.data.products);
				// console.log(products);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const cells = Object.keys(CProduct);

	// cells.forEach((k, cell) => console.log(cell));
	// const cellId = cells[0];
	const pushSizeTableHeaders = () => {
		const headers = document.querySelectorAll("[data-table-header-cell]");
		// console.log(headers);
		// headers.map((header) => {
		// 	console.log(header);
		// });
	};

	const setTableHeaders = () => {
		render(
			<div className="table_datagrid-header-row">
				{Object.keys(CProduct).map((elm, idx, arr) => {
					type arrP = { type: number | string; width: string };
					type P = keyof arrP;
					// console.log(elm);
					const bodyCell = document.querySelector<HTMLElement>(
						`[data-table-body-cell=${elm}]`
					);
					// console.log(bodyCell);
					return (
						<div
							data-table-header-cell={elm}
							style={{ width: `${bodyCell?.offsetWidth}` }}
							key={idx}
						>
							{elm}
						</div>
					);
				})}
			</div>,
			document.querySelector(".table_datagrid-header")
		);
	};

	// const getRefHtmlElement = () => {
	// const newRef = useRef(null);
	// return newRef;
	// };

	return (
		<div className="table_datagrid-layer">
			<div className="table_datagrid-header"></div>
			<div className="table_datagrid-scroll">
				<table>
					<tbody>
						{products.map((data: IProduct, dataId: number) => {
							return (
								<tr key={dataId}>
									{cells.map((cell, cellId) => {
										return <TableBodyCellUI cell={cell} data={data} />;
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableUI;
