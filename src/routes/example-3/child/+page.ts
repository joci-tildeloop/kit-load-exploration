import { fetchCatFact } from '$lib/api';
import { loadFunctions } from '$lib/stores/example3';
import { timeout } from '$lib/utils';
import type { PageLoad } from './$types';

const NAME = 'csr:page';
const startedAt = new Date();

export const load = (async ({ fetch }) => {
	loadFunctions.addLoadFunction({ name: NAME, startedAt: startedAt });

	const catFact = Promise.all([fetchCatFact(fetch), timeout(1000)]).then(([catFact]) => {
		return catFact;
	});

	return {
		[NAME]: {
			catFact: catFact
		}
	};
}) satisfies PageLoad;
