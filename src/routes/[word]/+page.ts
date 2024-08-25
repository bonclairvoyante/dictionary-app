import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`${URL}${params.word}`);
	const definition = await response.json();

	if (!response.ok) {
		error(404, {
			message: 'Sorry! That is not an English word. Perhaps check the spelling. 🤨'
		});
	}
	return {
		definition
	};
};
