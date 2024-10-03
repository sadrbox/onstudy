import { TColumnsHeader } from "src/components/ui/DataGrid/services";
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

export function translateColumnLable(column: TColumnsHeader) {
	if (column.label) {
		return translateWord(column.label.toString());
	} else {
		return translateWord(column.id.toString());
	}
}
