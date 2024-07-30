import { TGridSorting, TStoreGridData } from 'src/ui/GridDataTable/types';
import { atom } from 'jotai';

export const storeGridData = atom(undefined as TStoreGridData);

const initSorting: TGridSorting = {
  columnID: 'id',
  orderBy: 'ASC',
};
export const storeGridSorting = atom(initSorting);
