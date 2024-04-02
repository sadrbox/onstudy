// import axios from "axios";
import DataTable from "@/components/_global/DataTable/index";
// import "./style.scss";
import { getInfobases } from "@/services/cluster";
// import Infobases from "@/components/cluster/Infobases";
// import { getClusterInfobases } from "@/utils/v83Com";

async function getData() {
	//  Загружаем данные с сервера
	try {
		const data = await getInfobases();
		return data;
	} catch (error) {
		throw new Error("Ошибка");
	}
}
export default async function Page() {
	const columns = [
		{
			field: "id",
			header: "№",
			cssprops: { flex: "0 0 80px" },
		},
		{
			field: "identity",
			header: "Идентификатор",
			cssprops: { flex: 1 },
		},
		{ field: "desc", header: "Описание", cssprops: { flex: 3 } },
	];

	const data = await getData();
	return (
		<div style={{ height: "100%" }}>
			<DataTable columns={columns} data={data} />
		</div>
	);
}
