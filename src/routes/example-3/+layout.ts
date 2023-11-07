import { fetchCatFact } from '$lib/api';
import { loadFunctions } from '$lib/stores/example3';
import { timeout } from '$lib/utils';
import type { LayoutLoad } from './$types';

export const prerender = false;
export const ssr = false;

const NAME = 'root:layout';
const startedAt = new Date();

export const load = (async ({ fetch }) => {
	loadFunctions.addLoadFunction({ name: NAME, startedAt: startedAt });

	const catFact = Promise.all([fetchCatFact(fetch), timeout(3000)]).then(([catFact]) => {
		return catFact;
	});

	return {
		[NAME]: {
			catFact: catFact
		}
	};
}) satisfies LayoutLoad;
