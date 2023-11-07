import { fetchCatFact } from '$lib/api';
import { timeout } from '$lib/utils';
import type { LayoutLoad } from './$types';

export const prerender = false;
export const ssr = false;

const NAME = 'root:layout';
const startedAt = new Date();

export const load = (async ({ fetch }) => {
	await timeout(3000);

	return {
		[NAME]: {
			startedAt: startedAt,
			catFact: fetchCatFact(fetch)
		}
	};
}) satisfies LayoutLoad;
