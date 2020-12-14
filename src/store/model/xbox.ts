import {Store} from './store';

export const Xbox: Store = {
	currency: '$',
	labels: {
		inStock: {
			container:
				'#BodyContent > section > div > div > div > div > div > div.pb-4.col-md-3 > button',
			text: ['Checkout']
		},
		outOfStock: {
			container:
				'.src-pages-BundleBuilder-components-BundleBuilderHeader-__BundleBuilderHeader-module___checkoutButton',
			text: ['Out of stock']
		}
	},
	links: [
		{
			brand: 'microsoft',
			model: 'xbox series x',
			series: 'xboxsx',
			url: 'https://www.xbox.com/en-us/configure/8WJ714N3RBTL'
		},
		{
			brand: 'microsoft',
			model: 'xbox series s',
			series: 'xboxss',
			url: 'https://www.xbox.com/en-us/configure/942J774TP9JN'
		}
	],
	name: 'xbox'
};
