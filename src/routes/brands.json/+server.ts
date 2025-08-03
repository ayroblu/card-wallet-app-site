import brands from '../brands/processed_brands.json';
import { Brand, Brands } from '$lib/proto/brand';
import { json } from '@sveltejs/kit';

export function GET() {
	const brandsList: Brand[] = Object.values(brands).map((brand): Brand => {
		const { folder: id, name, modified: lastModified, url } = brand;
		return { id, name, countries: [], searchTerms: [], lastModified, url };
	});
	const payload: Brands = { brands: brandsList };
	return json(payload);
}
export const prerender = true;
