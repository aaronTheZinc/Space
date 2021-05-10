import type { AxiosInstance, AxiosResponse } from 'axios';
import type { QueryParameters } from '..';

export interface Crew {
	name: string;
	agency: string;
	image: string;
	wikipedia: string;
	launches: Array<string>;
	status: string;
	id: string;
}

const decode = (json: string): Crew => ({
	name: json['name'],
	agency: json['agency'],
	image: json['image'],
	wikipedia: json['wikipedia'],
	launches: json['launches'],
	status: json['status'],
	id: json['id'],
});

const path = '/crew';

export async function listCrew(client: AxiosInstance): Promise<Array<Crew>> {
	const response: AxiosResponse<any> = await client.get(path);
	return response.data.map(i => decode(i));
}

export async function getCrewMemberById(
	id: string,
	client: AxiosInstance
): Promise<Crew> {
	const response: AxiosResponse<any> = await client.get(`${path}/${id}`);
	return decode(response.data);
}

export async function queryCrew(
	client: AxiosInstance,
	params: QueryParameters
): Promise<Array<Crew | null>> {
	const response: AxiosResponse<any> = await client.post(
		`${path}/query`,
		params
	);
	return response.data.map(i => decode(i)) ?? null;
}
