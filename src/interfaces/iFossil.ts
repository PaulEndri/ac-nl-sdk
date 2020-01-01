import IItem from './IItem';

export interface IFossil extends IItem {
	Points: string;
	Color: string;
	Size: number;
}

export default IFossil;
