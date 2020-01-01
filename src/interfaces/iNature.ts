import IItem from './IItem';

export interface INature extends IItem {
	Location: string;
	Months: number[];
	Times: number[];
}

export default INature;
