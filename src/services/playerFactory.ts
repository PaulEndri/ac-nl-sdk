import IPlayer from '../interfaces/IPlayer';

export default class PlayerFactoryService {
	static GeneratePlayer(name: string, town: string): IPlayer {
		const player: IPlayer = {
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
