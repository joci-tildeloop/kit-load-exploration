import { get, writable } from 'svelte/store';

interface LoadFunction {
	name: string;
	startedAt: Date;
}

const initLoadFunctions = () => {
	const { subscribe, update } = writable<{ [name: string]: LoadFunction }>({});

	return {
		getLoadFunction: (name: string) => {
			return get({ subscribe })[name];
		},
		addLoadFunction: (newLoadFunction: LoadFunction) => {
			update((loadFunctions) => ({ ...loadFunctions, [newLoadFunction.name]: newLoadFunction }));
		}
	};
};

export const loadFunctions = initLoadFunctions();
