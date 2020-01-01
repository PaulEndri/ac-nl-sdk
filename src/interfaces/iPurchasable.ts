import IItem from './IItem';

export interface IPurchasable extends IItem {
	Source?: string;
}

export default IPurchasable;
