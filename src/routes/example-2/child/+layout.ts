import { fetchCatFact } from '$lib/api';
import { timeout } from '$lib/utils';
import type { LayoutLoad } from './$types';

const NAME = 'csr:layout';
const startedAt = new Date();

export const load = (async ({ fetch }) => {
	await timeout(2000);

	return {
		[NAME]: {
			startedAt: startedAt,
			catFact: fetchCatFact(fetch)
		}
	};
}) satisfies LayoutLoad;
