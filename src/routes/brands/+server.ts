import brands from './processed_brands.json';
import { Brand, Brands } from '$lib/proto/brand';

export function GET() {
	const brandsList: Brand[] = Object.values(brands).map((brand): Brand => {
		const { folder: id, name, modified: lastModified, url, color } = brand;
		return { id, name, countries: [], searchTerms: [], lastModified, url, colour: color };
	});
	const payload: Brands = { brands: brandsList };
	const buffer = Brands.toBinary(payload) as Uint8Array<ArrayBuffer>;
	return new Response(buffer);
}
export const prerender = true;
