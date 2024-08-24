import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const load: PageServerLoad = (async ({ params: { word } }) => {
	const response = await fetch(`${URL}${word}`);
    const definition = await response.json();

    if (!response.ok){
        error(404, {
            message: 'Word found'
        });
    }
    return {
        definition
    };


}) satisfies PageServerLoad;

