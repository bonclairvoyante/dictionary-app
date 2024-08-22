<div class="container max-w-96 md:max-w-lg px-2 pt-4">
	<div class="divider divider-start">
		<slot name="noun">noun</slot>
	</div>

	<p class="text-zinc-400 pt-6">Meaning</p>
	<!-- create loop for each meaning from API in bullet point form - lists-->

	<div class="flex gap-x-16 md:gap-x-36 pt-6">
		<p class="text-zinc-400">Synonyms</p>
		<p class="text-violet-500 text-nowrap">electronic keyboard</p>
	</div>

	{#if $$slots.verb}
		<div class="divider divider-start">
			<slot name="verb">verb</slot>
		</div>
	{/if}
	<div class="divider divider-start p-4"></div>

	<a href={'#'}>Source</a>
</div>
