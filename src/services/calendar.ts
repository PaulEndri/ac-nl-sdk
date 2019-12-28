import moment, { Moment } from 'moment';
import Villagers from '../data/villagers';
import Fishes from '../data/fish';
import Bugs from '../data/bug';
import Events from '../data/events';

export default class CalenderService {
	private date: Moment;

	constructor(date: string) {
		this.date = moment(date);
	}

	get month(): number {
		return this.date.month() + 1;
	}

	get day(): number {
		return this.date.date();
	}

	get hour(): number {
		return this.date.hour();
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

	public getVillagers() {
		const { month, day } = this;

		return Villagers.filter(({ Birthday }) => Birthday.Month === month && Birthday.Day === day);
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

	public getAll(forTime = false) {
		return {
			Events: this.getEvents(),
			Fishes: this.getFishes(forTime),
			Bugs: this.getBugs(forTime),
			Villagers: this.getVillagers()
		};
	}
}
