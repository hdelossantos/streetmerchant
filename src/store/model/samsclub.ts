import {Store} from './store';

export const SamcClub: Store = {
	currency: '$',
	labels: {
		inStock: {
			container: '.sc-pc-add-to-cart span',
			text: ['Add to Cart']
		},
		outOfStock: [
			{
				container: '.sc-pc-stock-labels-full',
				text: ['Not available for purchase at this time']
			}
		]
	},
	links: [
		{
			brand: 'test:brand',
			itemNumber: 'prod25091391',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.samsclub.com/p/dualsense-wireless-controller/prod25091391'
		},
		{
			brand: 'sony',
			itemNumber: 'prod24980178',
			model: 'ps5 console',
			series: 'sonyps5c',
			url: 'https://www.samsclub.com/p/ps5-bundle/prod24980178'
		}
	],
	name: 'samsclub'
};
