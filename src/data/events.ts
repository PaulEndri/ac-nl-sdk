import moment from 'moment';

interface INDEX {
	[key: string]: number;
}

const FISHING_TOURNAMENT_DETAILS: INDEX = {
	'1': 3,
	'2': 2,
	'3': 3,
	'4': 2,
	'5': 3,
	'10': 2,
	'11': 3,
	'12': 2
};

const nthOfMonth = (date: moment.Moment, nth: number) => {
	return Math.ceil(date.date() / 7) === nth;
};

const Events = [
	{
		Name: "New Year's Day",
		Date: [ 0, 0 ],
		Static: true
	},
	{
		Name: 'Groundhog Day',
		Date: [ 1, 1 ],
		Static: true
	},
	{
		Name: 'Fishing Tournament',
		Date: [],
		Static: false,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();

			return (
				momentDate.day() === 6 &&
				nthOfMonth(momentDate, FISHING_TOURNAMENT_DETAILS[`${month + 1}`])
			);
		}
	},
	{
		Name: 'Bug Off',
		Date: [],
		Static: false,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();
			const day = momentDate.date();

			return day === 3 && [ 6, 7, 8, 9 ].indexOf(month) >= 0;
		}
	},
	{
		Name: "Valentine's Day",
		Date: [ 1, 14 ],
		Static: true
	},
	{
		Name: 'Festivale',
		Date: [],
		Static: false,
		Range: true,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();
			const day = momentDate.date();

			return month >= 1 && day >= 2 && (month <= 2 && day <= 8);
		}
	},
	{
		Name: 'Shamrock Day',
		Date: [ 2, 17 ],
		Static: true
	},
	{
		Name: 'Bunny Day',
		Date: [],
		Static: false,
		Range: true,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();
			const day = momentDate.day();

			return (month === 2 || month === 3) && day === 0;
		}
	},
	{
		Name: "April Fool's Day",
		Date: [ 3, 1 ],
		Static: true
	},
	{
		Name: 'Cherry BLossom Festival',
		Date: [ [ 3, 1 ], [ 3, 10 ] ],
		Static: true,
		Range: true
	},
	{
		Name: 'Nature Day',
		Date: [ 3, 22 ],
		Static: true
	},
	{
		Name: 'Weeding Day',
		Date: [ 3, 30 ],
		Static: true
	},
	{
		Name: "Mother's Day",
		Date: [],
		Static: false,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();
			const day = momentDate.day();

			return month === 4 && day === 0 && nthOfMonth(momentDate, 2);
		}
	},
	{
		Name: "Father's Day",
		Date: [],
		Static: false,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();
			const day = momentDate.day();

			return month === 5 && day === 0 && nthOfMonth(momentDate, 3);
		}
	},
	{
		Name: "Summer's Solstice",
		Date: [ 6, 21 ],
		Static: true
	},
	{
		Name: 'Fireworks Show',
		Date: [],
		Static: false,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();
			const day = momentDate.day();

			return month === 5 && day === 0;
		}
	},
	{
		Name: 'Labor Day',
		Date: [],
		Static: false,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();
			const day = momentDate.day();

			return month === 8 && day === 1 && nthOfMonth(momentDate, 1);
		}
	},
	{
		Name: 'Harvest Moon Festival',
		Date: [],
		Static: false,
		Range: true,
		Calculate: (momentDate: moment.Moment) => {
			return momentDate.month() === 8;
		}
	},
	{
		Name: "Explorer's Day",
		Date: [],
		Static: false,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();
			const day = momentDate.day();

			return month === 9 && day === 1 && nthOfMonth(momentDate, 2);
		}
	},
	{
		Name: 'Mushrooming Season',
		Date: [ [ 10, 1 ], [ 10, 30 ] ],
		Static: true,
		Range: true
	},
	{
		Name: 'Halloween',
		Date: [ 9, 31 ],
		Static: true
	},
	{
		Name: 'Harvest Festival',
		Date: [],
		Static: false,
		Calculate: (momentDate: moment.Moment) => {
			const month = momentDate.month();
			const day = momentDate.day();

			return month === 10 && day === 4 && nthOfMonth(momentDate, 4);
		}
	},
	{
		Name: 'Winter Solstice',
		Date: [ 11, 21 ],
		Static: true
	},
	{
		Name: 'Toy Day',
		Date: [ 11, 24 ],
		Static: true
	},
	{
		Name: "New Year's Eve",
		Date: [ 11, 31 ],
		Static: true
	}
];

export default Events;
