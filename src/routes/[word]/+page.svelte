<script lang="ts">
	import type { PageServerData } from '../$types';

	export let data: PageServerData;

	$: definition = data.definition[0];
	$: phonetic = definition.phonetics.find((p: any) => Boolean(p.audio));

	const playAudio = () => {
		const audio = new Audio(phonetic.audio);
		audio.load();
		audio.play();
	};
</script>

<section class="mx-8 pt-6">
	<div class="flex justify-between items-center">
		<div>
			<h1 class="self-auto">{definition.word}</h1>
			<p class="color-violet-500">{definition.phonetic ?? ''}</p>
		</div>

		{#if phonetic}
			<button class="player" name="play" on:click={playAudio}>
				<enhanced:img src="/src/lib/assets/images/icon-play.svg" alt="icon-play" />
			</button>
		{/if}
	</div>

	{#each definition.meanings as meaning}
		<section class="my-10">
			<div class="mb-9">
				<span
					class="flex gap-5 items-center after:content-[''] after:flex-1 after:block after:h-[1px] after:bg-border after:dark:bg-border-dark"
				>
					<h2>{meaning.partOfSpeech}</h2>
					
				</span>
			</div>

			<ul class="grid gap-3">
				{#each meaning.definitions as definition}
					<li class="grid grid-cols-[auto_1fr] gap-5 pl-5 before:text-primary before:font-bold ]">
						<div class={`grid gap-3`}>
							<span>{definition.definition}</span>
							{#if definition.example}
								<span class="text-text2">
									"{definition.example}"
								</span>
							{/if}
						</div>
					</li>
				{/each}
			</ul>
			{#if meaning.synonyms[0]}
				<div class="my-10 flex gap-5">
					<h3>Synonyms</h3>
					<p class="text-primary">
						{#each meaning.synonyms as synonym, i}
							<a class="hover:underline" href="/{synonym}">{synonym}</a>{i + 1 ===
							meaning.synonyms.length
								? ''
								: ', '}
						{/each}
					</p>
				</div>
			{/if}
			{#if meaning.antonyms[0]}
				<div class="my-10 flex gap-5">
					<h3>antonyms</h3>
					<p class="text-primary">
						{#each meaning.antonyms as antonym, i}
							<a class="hover:underline" href="/{antonym}">{antonym}</a>{i + 1 ===
							meaning.antonyms.length
								? ''
								: ', '}
						{/each}
					</p>
				</div>
			{/if}
		</section>
	{/each}
</section>

<hr class="border-border mb-5 dark:border-border-dark" />

<div class="md:flex gap-5">
	<h3 class="underline">Source</h3>
	<a
		target="_blank"
		rel="noreferrer"
		href={definition.sourceUrls[0]}
		class="underline flex items-center gap-2 text-sm break-all"
	>
		{definition.sourceUrls[0]}
		<enhanced:img src="/src/lib/assets/images/icon-new-window.svg" alt="new-window-icon"/>
	</a>
</div>