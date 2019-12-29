export default interface IPlayer {
	Name: string;
	TownName: string;
	Villagers: string[];
	Museum: {
		Fishes: string[];
		Bugs: string[];
		Art: string[];
		Fossils: string[];
	};
	Catalogued: string[];
};
