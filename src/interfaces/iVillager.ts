import IPurchasable from './IPurchasable';
import Personality from '../types/Personality';
import Species from '../types/Species';

interface IVillager {
	'Name': string;
	'Url': string;
	'Biography': {
		'Siblings'?: string;
		'Skill': string;
		'Goal': string;
		'Fear'?: string;
	};
	'Favorites': {
		'Clothing': string;
		'Color': string;
	};
	'Coffee': {
		'Type': string;
		'Milk': string;
		'Sugar': string;
	};
	'Gifts': IPurchasable[];
	'Species': Species;
	'Personality': Personality;
	'Gender': string;
	'Birthday': {
		Month: number;
		Day: number;
	};
	'Star Sign': string;
	'Initial Phrase': string;
	'Initial Clothes': string;
	'Favorite Saying': string;
	'Song'?: string;
	'Style'?: string;
}

export default IVillager;
