import iPlayer from '../interfaces/iPlayer';

export default class PlayerFactoryService {
	static GeneratePlayer(name: string, town: string): iPlayer {
		const player: iPlayer = {
			Name: name,
			TownName: town,
			Catalogued: [],
			Villagers: [],
			Museum: {
				Bugs: [],
				Fishes: [],
				Art: [],
				Fossils: []
			}
		};

		return player;
	}
}
