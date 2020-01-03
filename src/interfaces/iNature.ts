import IItem from './IItem';

export interface INature extends IItem {
	Location?: string;
	Months: number[][];
	Times: number[][];
	Number?: number;
	Notes?: string[];
}

export default INature;
