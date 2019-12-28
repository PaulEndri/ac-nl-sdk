import iPurchasable from './iPurchasable';
import Personality from '../types/Personality';
import Species from '../types/Species';

interface iVillager {
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
	'Gifts': iPurchasable[];
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

export default iVillager;
