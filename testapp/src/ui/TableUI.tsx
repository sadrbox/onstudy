import React, { useEffect, useLayoutEffect } from "react";

type Props = {};

const TableUI = (props: Props) => {
	useLayoutEffect(() => {
		setWidthRow();
	});

	function setWidthRow() {
		const theadRows: NodeListOf<HTMLElement> =
			document.querySelectorAll("thead tr td");
		const tbodyRows = document.querySelectorAll(
			"tbody tr td"
		) as NodeListOf<HTMLElement>;

		const tbodyCells: HTMLElement[] = [...tbodyRows];
		// tbodyCells.map((elem) => {
		// 	console.log(elem.offsetWidth);
		// 	return elem;
		// });
		tbodyCells.forEach((element, index) => {
			// theadRows[index].offsetWidth = element.offsetWidth;
			console.log(theadRows);
		});

		// console.log(tbodyRows);
		// console.log(tbodyRowWidth?.offsetWidth);
	}
	return (
		<div>
			<table className="bg-green-300">
				<thead>
					<tr>
						<th>N</th>
						<th>ID</th>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>12312890</td>
						<td>Alex</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default TableUI;
