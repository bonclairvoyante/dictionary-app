<script>
	// Supports weights 200-900
	import '@fontsource-variable/inconsolata';
	// Supports weights 100-900
	import '@fontsource-variable/inter';
	// Supports weights 400-700
	import '@fontsource-variable/lora';
	import '../app.css';
	import { themeChange } from 'theme-change';
	import { browser } from '$app/environment';

	import { onMount } from 'svelte';

	onMount(async () => {
		themeChange(false);
	});
	const theme = browser && localStorage.getItem('theme');
	let word = '';
	let empty = false;
</script>

<nav class="navbar flex md:px-36">
	<div class="navbar-start">
		<enhanced:img src="/src/lib/assets/images/logo.svg" alt="dictionary-logo" />
	</div>
	<div class="flex navbar-end">
		<ul class="menu menu-horizontal sm:px-1 md:px-">
			<li>
				<details>
					<summary>Serif</summary>
					<ul class="bg-base-100 rounded-t-none p-2">
						<li><a href={'#'}>sans</a></li>
						<li><a href={'#'}>serif</a></li>
						<li><a href={'#'}>mono</a></li>
					</ul>
				</details>
			</li>
		</ul>
		<hr />
		<label class="flex cursor-pointer gap-2">
			<input
				type="checkbox"
				data-toggle-theme="light, dark"
				data-act-class="ACTIVECLASS"
				value="light"
				class="toggle theme-controller bg-violet-500"
				checked={theme === 'light'}
			/>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="dark: stroke-violet-500"
			>
				<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
			</svg>
		</label>
	</div>
</nav>

<section>
	<div class="flex justify-center items-center pt-32">
		<form
			on:submit={(e) => {
				if (!word) {
					e.preventDefault();
					empty = true;
				}
			}}
			action="/{word}"
			class="relative p-3 w-full max-w-lg text-base"
		>
			<input
				class="input input-bordered w-full rounded-lg"
				autocomplete="off"
				required
				on:blur={() => (empty = false)}
				class:border-danger={empty}
				class:focus:border-danger={empty}
				bind:value={word}
			/>

			<button type="submit" class="absolute right-3 top-6 w-6 h-6">
				<enhanced:img src="/src/lib/assets/images/icon-search.svg" alt="icon-search" />
			</button>
		</form>
	</div>
</section>


<slot />
