import type { AxiosInstance, AxiosResponse } from 'axios';

export interface Company {
  headquarters: Object;
	links: Object;
	name: string;
	founder: string;
	founded: number;
	employees: number;
	vehicles: number;
	launch_sites: number;
	test_sites: number;
	ceo: string;
	cto: string;
	coo: string;
	cto_propulsion: string;
	valuation: number;
	summary: string;
	id: string;
}

const decode = (json: string): Company => ({
	headquarters: json['headquarters'],
	links: json['links'],
	name: json['name'],
	founder: json['founder'],
	founded: json['founded'],
	employees: json['employees'],
	vehicles: json['vehicles'],
	launch_sites: json['launch_sites'],
	test_sites: json['test_sites'],
	ceo: json['ceo'],
	cto: json['cto'],
	coo: json['coo'],
	cto_propulsion: json['cto_propulsion'],
	valuation: json['valuation'],
	summary: json['summary'],
	id: json['id'],
});
// const decode = (json: string): Company => JSON.parse(json);

const path = '/company';

export async function getCompanyInfo(client: AxiosInstance): Promise<Company> {
	const response: AxiosResponse<any> = await client.get(path);
	return decode(response.data);
}
