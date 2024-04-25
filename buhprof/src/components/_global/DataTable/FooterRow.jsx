"use client";
import React, { useEffect } from "react";
import style from "./DataTable.module.scss";
import { getSumOfColumn } from "@/utils/functions";
const FooterRow = ({ props: { columns, data } }) => {
	function isSumColumn(column) {
		if (column.type === "number") {
			const sumOf = getSumOfColumn(data, column.field);

			return sumOf;
		} else {
			return false;
		}
	}
	return (
		<div id="footer_row" className={style.footer_row}>
			{columns.map((column, rowIdx) => (
				<div key={rowIdx} className={style.footer_cell} style={column?.cssCell}>
					<div className={style.field} style={column?.css?.footer}>
						{isSumColumn(column)}
					</div>
				</div>
			))}
		</div>
	);
};

export default FooterRow;
