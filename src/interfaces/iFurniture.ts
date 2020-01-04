import IPurchasable from './IPurchasable';

export interface IFurniture extends IPurchasable {
	Theme?: string;
	SalePrice?: number | string;
	Color?: string;
	Style?: string;
	Notes?: string;
}

export default IFurniture;
