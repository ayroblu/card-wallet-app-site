import { json } from '@sveltejs/kit';
import { getBrands } from '../brands/+server.js';

export function GET() {
	const payload = getBrands();
	return json(payload);
}
export const prerender = true;
