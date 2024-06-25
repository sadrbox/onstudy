import { PrimitiveAtom, SetStateAction } from "jotai";
// import { IProduct } from "./../ui/DataGrid/types";
import {
	IProduct,
	IColumns,
	IStoreGridData,
	TStoreGridData,
} from "@/ui/DataGrid/types";
import { atom, Atom } from "jotai";
// type TStoreGridData = Atom<<IProduct[]>, SetStateAction<IProduct[]>> | null;

const emptyStoreGridData = undefined;

export const storeGridData = atom(emptyStoreGridData as TStoreGridData);
