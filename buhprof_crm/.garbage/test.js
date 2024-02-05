const getCOMConnectionInstance = () => {
	const winax = require("winax");
	try {
		const connector = new winax.Object("V83.Application");
		console.log(connector[1]);
	} catch (e) {
		console.log("Не удалось подлючить COM-объект. Ошибка : ", e);
		return null;
	}
};

getCOMConnectionInstance();
console.log(
	"=========================================================================="
);
