import moment, { Moment } from 'moment';
import Villagers from '../data/villagers';
import Fishes from '../data/fish';
import Bugs from '../data/bug';
import Events from '../data/events';
import IVillager from '../interfaces/IVillager';
import IBug from '../interfaces/IBug';
import IFish from '../interfaces/IFish';
import IDeepSea from '../interfaces/IDeepSea';
import INature from '../interfaces/INature';
import DeepSea from '../data/deepSea';
import { FishLocations } from '../types/FishLocations';

export class CalenderService {
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
		return this.date.hour() || 24;
	}

	private matchRange(
		months: number[][],
		times: number[][],
		validateTime: boolean,
		month: number,
		time?: number
	) {
		return months.some((monthRange, index) => {
			const timeRange = times[index];

			if (!validateTime) {
				return monthRange.includes(month);
			} else if (time) {
				return monthRange.includes(month) && timeRange.includes(time);
			}
		});
	}

	private getNature(natureItems: INature[], forTime: boolean, location?: string) {
		return natureItems.filter((natureItem) => {
			const timeResult = this.matchRange(
				natureItem.Months,
				natureItem.Times,
				forTime,
				this.month,
				this.hour
			);
			if (!location || location.length === 0) {
				return timeResult;
			}

			return timeResult && natureItem.Location && natureItem.Location.includes(location);
		});
	}

	public getDeepSea(allDeepSea: IDeepSea[], forTime = false) {
		return this.getNature(allDeepSea, forTime);
	}

	public getFishes(allFishes: IFish[], forTime = false, location?: FishLocations) {
		return this.getNature(allFishes, forTime, location);
	}

	public getBugs(allBugs: IBug[], forTime = false, location?: string) {
		return this.getNature(allBugs, forTime, location);
	}

	public getVillagers(allVillagers: IVillager[]) {
		const { month, day } = this;

		const villagers = allVillagers.filter(
			({ Birthday }) => Birthday.Month === month && Birthday.Day === day
		);

		return villagers;
	}

	public getEvents() {
		const { month, day, date } = this;
		const actualEventMonth = month - 1;

		return Events.filter((event) => {
			if (event.Static && event.Range) {
				const [ [ startMonth, startDay ], [ endMonth, endDay ] ] = event.Date;
				const isAfterStart = actualEventMonth >= startMonth && day >= startDay;
				const isBeforeEnd = actualEventMonth <= endMonth && day <= endDay;

				return isAfterStart && isBeforeEnd;
			} else if (event.Static) {
				const [ eventMonth, eventDay ] = event.Date;

				return eventMonth === actualEventMonth && eventDay === day;
			} else {
				return event.Calculate && event.Calculate(date);
			}
		});
	}

	public getAll(forTime = false) {
		return {
			Events: this.getEvents(),
			DeepSea: this.getDeepSea(DeepSea, forTime),
			Fishes: this.getFishes(Fishes, forTime),
			Bugs: this.getBugs(Bugs, forTime),
			Villagers: this.getVillagers(Villagers)
		};
	}
}

export default CalenderService;
