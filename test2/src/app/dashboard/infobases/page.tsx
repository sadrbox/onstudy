// import { getInfobases } from "@/services/service1c";
// import { getInfoBases } from "@/utils/v83Com";
// import Cluster from "@/app/components/Cluster";
// import Cluster from "cluster";

// import Cluster from "@/components/Infobases";
import GetInfobases from "@/components/cluster/Infobases";

export default async function Page() {
	// const data = await getInfobases();
	return (
		<main className="">
			<GetInfobases />
		</main>
	);
}
