import iPurchasable from './iPurchasable';
import ClothingTypes from '../types/ClothingTypes';

export default interface iClothing extends iPurchasable {
	Look?: string;
	Type: string;
};
