import { SetStateAction } from "jotai";
// import { IProduct } from "./../ui/DataGrid/types";
import { IProduct } from "@/ui/DataGrid/types";
import { atom, Atom } from "jotai";
// type TStoreGridData = Atom<<IProduct[]>, SetStateAction<IProduct[]>> | null;
export const storeGridData = atom<IProduct[] | undefined>(undefined);
