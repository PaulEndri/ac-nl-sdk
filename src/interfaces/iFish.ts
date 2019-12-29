import iNature from './INature';
import { FishLocations } from '../types/FishLocations';

export default interface IFish extends iNature {
	Location: FishLocations;
	Size: string;
};
