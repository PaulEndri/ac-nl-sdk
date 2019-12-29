import moment, { Moment } from 'moment';
import Villagers from '../data/villagers';
import Fishes from '../data/fish';
import Bugs from '../data/bug';
import Events from '../data/events';
import IPlayer from '../interfaces/IPlayer';

export class CalenderService {
	private date: Moment;
	private playerData?: IPlayer;

	constructor(date: string, player?: IPlayer) {
		this.date = moment(date);
		this.playerData = player;
	}

	get month(): number {
		return this.date.month() + 1;
	}

	get day(): number {
		return this.date.date();
	}

	get hour(): number {
		return this.date.hour() || 24;
	}

	private findInArray(arrayToCheck: number[], value: number) {
		return arrayToCheck.indexOf(value) >= 0;
	}

	public getFishes(forTime = false) {
		return Fishes.filter((fish) => {
			const validMonth = this.findInArray(fish.Months, this.month);
			const validTime = this.findInArray(fish.Times, this.hour);

			return validMonth && (!forTime || validTime);
		});
	}

	public getBugs(forTime = false) {
		return Bugs.filter((fish) => {
			const validMonth = this.findInArray(fish.Months, this.month);
			const validTime = this.findInArray(fish.Times, this.hour);

			return validMonth && (!forTime || validTime);
		});
	}

	public getVillagers(playerVillagers = false) {
		const { month, day } = this;

		const villagers = Villagers.filter(
			({ Birthday }) => Birthday.Month === month && Birthday.Day === day
		);

		if (playerVillagers) {
			return villagers.filter(
				({ Name }) =>
					this.playerData ? this.playerData.Villagers.indexOf(Name) >= 0 : true
			);
		}

		return villagers;
	}

	public getEvents() {
		const { month, day, date } = this;

		return Events.filter((event) => {
			if (event.Static && event.Range) {
				const [ [ startMonth, startDay ], [ endMonth, endDay ] ] = event.Date;
				const isAfterStart = month >= startMonth && day >= startDay;
				const isBeforeEnd = month <= endMonth && day <= endDay;

				return isAfterStart && isBeforeEnd;
			} else if (event.Static) {
				const [ eventMonth, eventDay ] = event.Date;

				return eventMonth === month && eventDay === day;
			} else {
				return event.Calculate && event.Calculate(date);
			}
		});
	}

	public getAll(forTime = false, forPlayer = false) {
		return {
			Events: this.getEvents(),
			Fishes: this.getFishes(forTime),
			Bugs: this.getBugs(forTime),
			Villagers: this.getVillagers(forPlayer)
		};
	}
}

export default CalenderService;
