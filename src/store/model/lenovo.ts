import {Store} from './store';

export const Lenovo: Store = {
	currency: '$',
	labels: {
		inStock: {
			container: '#addToCart',
			text: ['Add to cart']
		},
		outOfStock: {
			container: '.rci-msg .stock_message',
			text: ['Sold Out']
		}
	},
	links: [
		{
			brand: 'test:brand',
			itemNumber: '78014816',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.lenovo.com/us/en/accessories-and-monitors/consumer-electronics/ar-vr-accessories/htc-usb-extension-cable-1-5-ft/p/78014816'
		},
		{
			brand: 'microsoft',
			itemNumber: '78015889',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://www.lenovo.com/us/en/accessories-and-monitors/consumer-electronics/gaming-consoles/microsoft-xbox-series-x-game-console-1-tb-ssd/p/78015889'
		},
		{
			brand: 'microsoft',
			itemNumber: '78015888',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.lenovo.com/us/en/accessories-and-monitors/consumer-electronics/gaming-consoles/Microsoft-Xbox-Series-S-game-console-512-GB-SSD/p/78015888'
		}
	],
	name: 'lenovo'
};
