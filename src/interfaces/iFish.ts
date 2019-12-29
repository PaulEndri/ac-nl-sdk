import iNature from './iNature';
import { FishLocations } from '../types/FishLocations';

export default interface iFish extends iNature {
	Location: FishLocations;
	Size: string;
};
