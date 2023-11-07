import { fetchCatFact } from '$lib/api';
import { timeout } from '$lib/utils';
import type { PageLoad } from './$types';

const NAME = 'csr:page';
const startedAt = new Date();

export const load = (async ({ fetch }) => {
	await timeout(1000);

	return {
		[NAME]: {
			startedAt: startedAt,
			catFact: fetchCatFact(fetch)
		}
	};
}) satisfies PageLoad;
