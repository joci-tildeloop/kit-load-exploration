import { fetchCatFact } from '$lib/api';
import { timeout } from '$lib/utils';
import type { LayoutLoad } from './$types';

export const prerender = false;
export const ssr = false;

const NAME = 'root:layout';
const startedAt = new Date();

export const load = (async ({ fetch }) => {
	const catFact = Promise.all([fetchCatFact(fetch), timeout(3000)]).then(([catFact]) => {
		return catFact;
	});

	return {
		[NAME]: {
			startedAt: startedAt,
			catFact: catFact
		}
	};
}) satisfies LayoutLoad;
