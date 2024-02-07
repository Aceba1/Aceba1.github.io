import { wrap } from 'svelte-spa-router/wrap';

import Home from './Home.svelte';
import About from './About.svelte';
import Loading from './Loading.svelte';
import NotFound from './NotFound.svelte';

const routes = {
	// Exact path
	'/': wrap({ component: Home }),

	// Using named parameters, with last being optional
	'/projects/:first/:last?': wrap({
		asyncComponent: () =>
			import('./Projects.svelte').then((component) => {
				// The `.then` and Promise aren't needed. Just to test the loading component
				return new Promise((resolve) => {
					setTimeout(() => resolve(component), 2050);
				});
			}),
		loadingComponent: Loading,
		loadingParams: {
			message: 'loadijgn P{rokjects...'
		}
	}),

	'/about/': wrap({ component: About }),

	'*': wrap({ component: NotFound })
};

export default routes;
