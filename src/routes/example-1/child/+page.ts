import { fetchCatFact } from '$lib/api';
import { timeout } from '$lib/utils';
import type { PageLoad } from './$types';

const NAME = 'csr:page';
const startedAt = new Date();

export const load = (async ({ fetch }) => {
	const catFact = Promise.all([fetchCatFact(fetch), timeout(1000)]).then(([catFact]) => {
		return catFact;
	});

	return {
		[NAME]: {
			startedAt: startedAt,
			catFact: catFact
		}
	};
}) satisfies PageLoad;
