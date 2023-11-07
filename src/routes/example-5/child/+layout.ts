import { fetchCatFact } from '$lib/api';
import { loadFunctions } from '$lib/stores/example5';
import { timeout } from '$lib/utils';
import type { LayoutLoad } from './$types';

const NAME = 'csr:layout';
const startedAt = new Date();

export const load = (async ({ fetch }) => {
	loadFunctions.addLoadFunction({ name: NAME, startedAt: startedAt });

	const catFact = Promise.all([fetchCatFact(fetch), timeout(2000)]).then(([catFact]) => {
		return catFact;
	});

	return {
		[NAME]: {
			catFact: catFact
		}
	};
}) satisfies LayoutLoad;
