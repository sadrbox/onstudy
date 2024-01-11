function generateRandomHex(length) {
	let hex = "";
	for (let i = 0; i < length; i++) {
		const randomNumber = Math.floor(Math.random() * 16);
		hex += randomNumber.toString(16);
	}
	return hex;
}

function generateTimestamp() {
	const timestamp = new Date().getDate();
	// console.log(timestamp);
	return timestamp;
}

function convertToBinaryArray(length) {
	const generatedString = generateRandomHex(length);
	const encoder = new TextEncoder();
	const binaryArray = encoder.encode(generatedString);
	// return binaryArray;
	console.log(binaryArray);
}

async function convertToBinaryObject(length) {
	const generatedString = generateRandomHex(length);
	const binaryObject = await Buffer.from(generatedString, "hex");
	return binaryObject;
}

export {
	generateRandomHex,
	generateTimestamp,
	convertToBinaryObject,
	convertToBinaryArray,
};
