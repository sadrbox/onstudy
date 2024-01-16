function generateRandomHex(length) {
	let hex = "";
	for (let i = 0; i < length; i++) {
		const randomNumber = Math.floor(Math.random() * 16);
		hex += randomNumber.toString(16);
	}
	return hex;
}

function generateDatetime2() {
	const currentDate = new Date();
	const formattedDate = new Date(
		currentDate.getFullYear() + 2000,
		currentDate.getMonth(),
		currentDate.getDate()
	).toISOString();

	return formattedDate;
}

function convertToBinaryArray(length) {
	const generatedString = generateRandomHex(length);
	const encoder = new TextEncoder();
	const binaryArray = encoder.encode(generatedString);
	// return binaryArray;
	console.log(binaryArray);
}

function convertToBinaryObject(length) {
	const generatedString = generateRandomHex(length);
	const binaryObject = Buffer.from(generatedString, "hex");
	return binaryObject;
}

function generateBytesField(length) {
	const randomBytes = new Uint8Array(length);
	console.log(randomBytes);
	return randomBytes;
}

export {
	generateRandomHex,
	generateDatetime2,
	convertToBinaryObject,
	convertToBinaryArray,
	generateBytesField,
};
