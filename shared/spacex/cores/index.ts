import type { AxiosInstance, AxiosResponse } from 'axios';
import type { QueryParameters } from '..';

export interface Core {
	block: number;
	reuse_count: number;
	rtls_attempts: number;
	rtls_landings: number;
	asds_attempts: number;
	asds_landings: number;
	last_update: string;
	launches: Array<string>;
	serial: string;
	status: string;
	id: string;
}

const decode = (json: string): Core => ({
	block: json['block'],
	reuse_count: json['reuse_count'],
	rtls_attempts: json['rtls_attempts'],
	rtls_landings: json['rtls_landings'],
	asds_attempts: json['asds_attempts'],
	asds_landings: json['asds_landings'],
	last_update: json['last_update'],
	launches: json['launches'],
	serial: json['serial'],
	status: json['status'],
	id: json['id'],
});

const path = '/cores';

export async function listCores(client: AxiosInstance): Promise<Array<Core>> {
	const response: AxiosResponse<any> = await client.get(path);
	return response.data.map(i => decode(i));
}

export async function getCoreById(
	id: string,
	client: AxiosInstance
): Promise<Core> {
	const response: AxiosResponse<any> = await client.get(`${path}/${id}`);
	return decode(response.data);
}

export async function queryCores(
	client: AxiosInstance,
	params: QueryParameters
): Promise<Array<Core | null>> {
	const response: AxiosResponse<any> = await client.post(
		`${path}/query`,
		params
	);
	return response.data.map(i => decode(i)) ?? null;
}
