<script lang="ts">
	import { loadFunctions } from '$lib/stores/example4';

	export let data;
</script>

<div class="main">
	{#each Object.entries(data) as [name, { catFact }]}
		{@const loadFunction = loadFunctions.get(name)}
		<div>
			{#await catFact}
				Load function started at: {$loadFunction?.startedAt?.toISOString()}<br />
				Waiting for {name} data.
			{:then value}
				{@const { receivedAt, requestedAt, ...fact } = value}
				Fact from <code>{name}</code> load function started at: {$loadFunction?.startedAt?.toISOString()}<br
				/>
				requested at the time of <code>{requestedAt.toISOString()}</code> is: <br />
				received at the time of <code>{receivedAt.toISOString()}</code> is: <br />
				<pre>{JSON.stringify(fact, null, 2)}</pre>
			{/await}
		</div>
	{/each}
</div>

<style>
	.main {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	pre {
		white-space: pre-wrap;
	}
</style>
