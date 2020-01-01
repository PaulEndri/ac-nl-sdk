import IPurchasable from './IPurchasable';
import ClothingTypes from '../types/ClothingTypes';

export interface IClothing extends IPurchasable {
	Look?: string;
	Type: string;
}

export default IClothing;
