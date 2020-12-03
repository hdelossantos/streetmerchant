import {Store} from './store';

export const Meijer: Store = {
	labels: {
		inStock: {
			container: '.js-add-to-cart.btn-icon',
			text: ['Add to Cart']
		},
		outOfStock: {
			container: '.js-add-to-cart.btn-icon.outOfStock',
			text: ['Out of Stock']
		}
	},
	links: [
		{
			brand: 'test:brand',
			itemNumber: '88984208433',
			model: 'test:model',
			series: 'test:series',
			url:
				'https://www.meijer.com/shop/en/video-games-consoles/xbox/accessories/xbox-one-wireless-controller-white/p/88984208433'
		},
		{
			brand: 'sony',
			itemNumber: '71171954102',
			model: 'ps5 console',
			series: 'sonyps5c',
			url:
				'https://www.meijer.com/shop/en/video-games-consoles/playstation/all-playstation/playstation-5-console/p/71171954102'
		},
		{
			brand: 'sony',
			itemNumber: '71171954103',
			model: 'ps5 digital',
			series: 'sonyps5de',
			url:
				'https://www.meijer.com/shop/en/video-games-consoles/playstation/all-playstation/playstation-5-digital-edition-console/p/71171954103'
		},
		{
			brand: 'microsoft',
			itemNumber: '88984264072',
			model: 'xbox series x',
			series: 'xboxsx',
			url:
				'https://www.meijer.com/shop/en/video-games-consoles/xbox/all-xbox/xbox-series-x-console/p/88984264072'
		},
		{
			brand: 'microsoft',
			itemNumber: '88984265131',
			model: 'xbox series s',
			series: 'xboxss',
			url:
				'https://www.meijer.com/shop/en/video-games-consoles/xbox/gaming-systems/xbox-series-s/p/88984265131'
		}
	],
	name: 'meijer'
};
