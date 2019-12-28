import iBug from '../interfaces/iBug';

const Bugs: iBug[] = [
	{
		Name: 'Common Butterfly',
		Price: 90,
		Location: 'Air',
		Months: [ 3, 4, 5, 6, 9 ],
		Times: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Mosquito',
		Price: 130,
		Location: 'Air',
		Months: [ 6, 7, 8, 9 ],
		Times: [ 1, 2, 3, 4, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Darner Dragonfly',
		Price: 200,
		Location: 'Air',
		Months: [ 6, 7, 8 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Agrias Butterfly',
		Price: 3000,
		Location: 'Air',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Moth',
		Price: 60,
		Location: 'Air (Near Lights)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Firefly',
		Price: 300,
		Location: 'Air (Near Water)',
		Months: [ 6 ],
		Times: [ 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Raja Brooke Butterfly',
		Price: 2500,
		Location: 'Air (Near Water)',
		Months: [ 5, 6, 7, 8, 9, 12 ],
		Times: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Wharf Roach',
		Price: 200,
		Location: 'Beach',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 1, 2, 3, 4, 21, 22, 23, 24 ]
	},
	{
		Name: 'Yellow Butterfly',
		Price: 90,
		Location: 'Flowers',
		Months: [ 3, 4, 5, 6, 9 ],
		Times: [ 1, 2, 3, 4, 21, 22, 23, 24 ]
	},
	{
		Name: 'Honeybee',
		Price: 100,
		Location: 'Flowers',
		Months: [ 3, 4, 5, 6, 7 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Ladybug',
		Price: 200,
		Location: 'Flowers',
		Months: [ 3, 4, 5, 6, 10 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Mantis',
		Price: 430,
		Location: 'Flowers',
		Months: [ 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Emperor Butterfly',
		Price: 2500,
		Location: 'Flowers',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23, 24 ]
	},
	{
		Name: 'Birdwing Butterfly',
		Price: 4000,
		Location: 'Flowers',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 1, 2, 3, 4, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Peacock Butterfly',
		Price: 220,
		Location: 'Flowers (Blue/Black/Purple)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Tiger Butterfly',
		Price: 160,
		Location: 'Flowers (Red)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Orchid Mantis',
		Price: 2400,
		Location: 'Flowers (White)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Long Locust',
		Price: 200,
		Location: 'Ground',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 4, 5, 6, 7, 8, 9 ]
	},
	{
		Name: 'Tiger Beetle',
		Price: 1500,
		Location: 'Ground',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Tarantula',
		Price: 8000,
		Location: 'Ground',
		Months: [ 6, 7, 8, 12 ],
		Times: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Pill Bug',
		Price: 250,
		Location: 'Hit Rocks',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Pondskater',
		Price: 130,
		Location: 'Ponds',
		Months: [ 5, 6, 7, 8, 9, 12 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Diving Beetle',
		Price: 800,
		Location: 'River',
		Months: [ 5, 6, 7, 8, 9, 12 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Snail',
		Price: 250,
		Location: 'Shrubs (Rain)',
		Months: [ 4, 5, 6, 7, 8, 9, 12 ],
		Times: [ 1, 2, 3, 4, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Violin Beetle',
		Price: 260,
		Location: 'Stumps',
		Months: [ 6, 7, 8, 9, 10, 11 ],
		Times: [ 1, 2, 3, 4, 9, 10, 11, 12, 13, 14, 15, 16, 21, 22, 23, 24 ]
	},
	{
		Name: 'Fly',
		Price: 60,
		Location: 'Trash',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Ant',
		Price: 80,
		Location: 'Trash',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Stink Bug',
		Price: 120,
		Location: 'Trees',
		Months: [ 4, 5, 6, 7, 8, 9, 10 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Oak Silk Moth',
		Price: 1200,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Horned Dynastid',
		Price: 1350,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Lantern Fly',
		Price: 1800,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Rainbow Stag',
		Price: 10000,
		Location: 'Trees',
		Months: [ 6, 7, 8, 9 ],
		Times: [ 1, 2, 3, 4, 21, 22, 23, 24 ]
	},
	{
		Name: 'Goliath Beetle',
		Price: 6000,
		Location: 'Trees (Palm)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Horned Atlas',
		Price: 8000,
		Location: 'Trees (Palm)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23, 24 ]
	},
	{
		Name: 'Spider',
		Price: 300,
		Location: 'Trees (Shaken)',
		Months: [ 3, 4, 5, 6, 7, 8, 9, 10 ],
		Times: [ 1, 2, 3, 4, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Bee',
		Price: 2500,
		Location: 'Trees (Shaken)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Flea',
		Price: 70,
		Location: 'Villagers',
		Months: [ 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Monarch Butterfly',
		Price: 140,
		Location: 'Air (Near Flowers)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Hermit Crab',
		Price: 1000,
		Location: 'Beach (Island)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Grasshopper',
		Price: 160,
		Location: 'Ground',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Migratory Locust',
		Price: 600,
		Location: 'Ground',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Longhorn Beetle',
		Price: 260,
		Location: 'Stumps',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Drone Beetle',
		Price: 100,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Fruit Beetle',
		Price: 100,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Walking Stick',
		Price: 600,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 1, 2, 3, 4, 21, 22, 23, 24 ]
	},
	{
		Name: 'Miyama Stag',
		Price: 1000,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Saw Stag Beetle',
		Price: 2000,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23, 24 ]
	},
	{
		Name: 'Jewel Beetle',
		Price: 2400,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Scarab Beetle',
		Price: 6000,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Giant Stag',
		Price: 10000,
		Location: 'Trees',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Horned Elephant',
		Price: 8000,
		Location: 'Trees (Palm)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'Cyclommatus Stag',
		Price: 8000,
		Location: 'Trees (Palm)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Golden Stag',
		Price: 12000,
		Location: 'Trees (Palm)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Horned Hercules',
		Price: 12000,
		Location: 'Trees (Palm)',
		Months: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Red Dragonfly',
		Price: 80,
		Location: 'Air',
		Months: [ 9, 10, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23, 24 ]
	},
	{
		Name: 'Petaltail Dragonfly',
		Price: 8000,
		Location: 'Air',
		Months: [ 8, 9, 10, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23, 24 ]
	},
	{
		Name: 'Banded Dragonfly',
		Price: 4500,
		Location: 'Air (Near Water)',
		Months: [ 7, 8 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Cricket',
		Price: 160,
		Location: 'Ground',
		Months: [ 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Locust',
		Price: 400,
		Location: 'Ground',
		Months: [ 8, 9, 10, 11 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Walking Leaf',
		Price: 600,
		Location: 'Ground',
		Months: [ 7, 8, 9 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Bell Cricket',
		Price: 1720,
		Location: 'Ground',
		Months: [ 9, 10 ],
		Times: [ 9, 10, 11, 12, 13, 14, 15, 16 ]
	},
	{
		Name: 'Scorpion',
		Price: 8000,
		Location: 'Ground',
		Months: [ 7, 8, 9 ],
		Times: [ 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21 ]
	},
	{
		Name: 'House Centipede',
		Price: 250,
		Location: 'Hit Rocks',
		Months: [ 8, 9, 10, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 21, 22, 23, 24 ]
	},
	{
		Name: 'Centipede',
		Price: 300,
		Location: 'Hit Rocks',
		Months: [ 1, 2, 6, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Dung Beetle',
		Price: 800,
		Location: 'Snowballs',
		Months: [ 1, 2, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Cicada Shell',
		Price: 100,
		Location: 'Trees',
		Months: [ 7, 8, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Brown Cicada',
		Price: 200,
		Location: 'Trees',
		Months: [ 7, 8, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Robust Cicada',
		Price: 300,
		Location: 'Trees',
		Months: [ 7, 8, 12 ],
		Times: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
	},
	{
		Name: 'Walker Cicada',
		Price: 400,
		Location: 'Trees',
		Months: [ 7, 8, 9 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Giant Cicada',
		Price: 500,
		Location: 'Trees',
		Months: [ 7, 8, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Evening Cicada',
		Price: 550,
		Location: 'Trees',
		Months: [ 7, 8, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Bagworm',
		Price: 300,
		Location: 'Trees (Shaken)',
		Months: [ 1, 2, 10, 11, 12 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	},
	{
		Name: 'Mole Cricket',
		Price: 280,
		Location: 'Underground',
		Months: [ 1, 2, 3, 4, 5, 11 ],
		Times: [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9,
			10,
			11,
			12,
			13,
			14,
			15,
			16,
			17,
			18,
			19,
			20,
			21,
			22,
			23,
			24
		]
	}
];

export default Bugs;