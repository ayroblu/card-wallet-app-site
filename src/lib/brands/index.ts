import brands from './processed_brands.json';
import { Brand, Brands } from '$lib/proto/brand';

export function getBrands(): Brands {
	const brandsList: Brand[] = Object.values(brands).map((brand): Brand => {
		const { folder: id, name, modified: lastModified, url, color } = brand;
		return { id, name, countries: [], searchTerms: [], lastModified, url, colour: color };
	});
	const payload: Brands = { brands: brandsList };
	return payload;
}
