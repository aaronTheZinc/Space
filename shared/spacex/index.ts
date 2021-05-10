import axios, { AxiosInstance } from 'axios';

export interface QueryParameters {
	'query': object;
	'options': object;
}

export function createClient(): AxiosInstance {
	const client: AxiosInstance = axios.create({
		baseURL: 'https://api.spacexdata.com/v4',
		headers: {
			'Access-Control-Allow-Origin': '*/*',
			'Content-Type': 'application/json',
		},
	});

	return client;
}

export * from './capsules';
export * from './company';
export * from './cores';
export * from './crew';
export * from './dragons';
export * from './launches';
