import IPurchasable from './IPurchasable';
import ClothingTypes from '../types/ClothingTypes';

export default interface IClothing extends IPurchasable {
	Look?: string;
	Type: string;
};
