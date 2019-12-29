import IItem from './IItem';

export default interface IPurchasable extends IItem {
	Source?: string;
};
