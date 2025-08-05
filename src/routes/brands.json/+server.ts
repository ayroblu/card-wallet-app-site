import { json } from '@sveltejs/kit';
import { getBrands } from '$lib/brands/index.js';

export function GET() {
	const payload = getBrands();
	return json(payload);
}
export const prerender = true;
