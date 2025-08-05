import { getBrands } from '$lib/brands/index.js';
import { Brands } from '$lib/proto/brand.js';

export function GET() {
	const payload = getBrands();
	const buffer = Brands.toBinary(payload) as Uint8Array<ArrayBuffer>;
	return new Response(buffer);
}
export const prerender = true;
