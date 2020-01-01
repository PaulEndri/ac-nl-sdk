import iNature from './INature';
import { FishLocations } from '../types/FishLocations';

export interface IFish extends iNature {
	Location: FishLocations;
	Size: string;
}

export default IFish;
