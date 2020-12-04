import {Store} from './store';

export const SamcClub: Store = {
	labels: {
		inStock: {
			container: '.sc-pc-add-to-cart span',
			text: ['Add to Cart']
		},
		outOfStock: {
			container:
				'.sc-pc-large-desktop-oos-card-price .sc-pc-large-desktop-oos-card-out-of-stock-text',
			text: ['Ship this item', 'Pick up in club']
		}
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
