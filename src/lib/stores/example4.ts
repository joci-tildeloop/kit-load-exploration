import { get, writable, type Writable } from 'svelte/store';

interface LoadFunction {
	name: string;
	startedAt: Date;
}

const initLoadFunctions = () => {
	const { subscribe, update } = writable<{ [name: string]: Writable<LoadFunction> }>({});

	return {
		get: (name: string) => {
			const loadFunction = get({ subscribe })[name];

			if (!loadFunction) {
				const newLoadFunction = writable<LoadFunction>();

				update((loadFunctions) => ({
					...loadFunctions,
					[name]: newLoadFunction
				}));

				return newLoadFunction;
			} else {
				return loadFunction;
			}
		},
		push: (newLoadFunction: LoadFunction) => {
			const loadFunction = get({ subscribe })[newLoadFunction.name];

			if (loadFunction) {
				loadFunction.update((value) => ({ ...value, startedAt: newLoadFunction.startedAt }));
			} else {
				update((loadFunctions) => ({
					...loadFunctions,
					[newLoadFunction.name]: writable(newLoadFunction)
				}));
			}
		}
	};
};

export const loadFunctions = initLoadFunctions();
