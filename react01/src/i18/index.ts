import translations from "./translations.json" assert { type: "json" };

type TTranslations = {
	[key: string]: string;
};

const typedTranslations: TTranslations = translations;

export function translateWord(word: string, language = "ru"): string {
	const result = typedTranslations[word];
	if (result) {
		return result;
	}
	return word;
}
