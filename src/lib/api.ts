export async function fetchCatFact(
	fetch: (input: RequestInfo | URL, init?: RequestInit | undefined) => Promise<Response>
) {
	const requestedAt = new Date();
	return fetch('https://catfact.ninja/fact').then(async (response) => {
		if (!response.ok) {
			throw new Error(`${response.status}`);
		}
		return response.json().then((data) => {
			return {
				...(data as { fact: string; length: number }),
				requestedAt,
				receivedAt: new Date()
			};
		});
	});
}
