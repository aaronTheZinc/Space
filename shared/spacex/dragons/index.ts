import type { AxiosInstance, AxiosResponse } from 'axios';
import type { QueryParameters } from '..';

export interface Dragon {
	heat_shield: Array<Object>;
	launch_payload_mass: Array<Object>;
	launch_payload_vol: Array<Object>;
	return_payload_mass: Array<Object>;
	return_payload_vol: Array<Object>;
	pressurized_capsule: Array<Object>;
	trunk: Array<Object>;
	height_w_trunk: Array<Object>;
	diameter: Array<Object>;
	first_flight: string;
	flickr_images: Array<string>;
	name: string;
	type: string;
	active: boolean;
	crew_capacity: number;
	sidewall_angle_deg: number;
	orbit_duration_yr: number;
	dry_mass_kg: number;
	dry_mass_lb: number;
	thrusters: Array<string>;
	wikipedia: string;
	description: string;
	id: string;
}

const decode = (json: string): Dragon => ({
	heat_shield: json['heat_shield'],
	launch_payload_mass: json['launch_payload_mass'],
	launch_payload_vol: json['launch_payload_vol'],
	return_payload_mass: json['return_payload_mass'],
	return_payload_vol: json['return_payload_vol'],
	pressurized_capsule: json['pressurized_capsule'],
	trunk: json['trunk'],
	height_w_trunk: json['height_w_trunk'],
	diameter: json['diameter'],
	first_flight: json['first_flight'],
	flickr_images: json['flickr_images'],
	name: json['name'],
	type: json['type'],
	active: json['active'],
	crew_capacity: json['crew_capacity'],
	sidewall_angle_deg: json['sidewall_angle_deg'],
	orbit_duration_yr: json['orbit_duration_yr'],
	dry_mass_kg: json['dry_mass_kg'],
	dry_mass_lb: json['dry_mass_lb'],
	thrusters: json['thrusters'],
	wikipedia: json['wikipedia'],
	description: json['description'],
	id: json['id'],
});

const path = '/dragons';

export async function listDragons(
	client: AxiosInstance
): Promise<Array<Dragon>> {
	const response: AxiosResponse<any> = await client.get(path);
	return response.data.map(i => decode(i));
}

export async function getDragonById(
	id: string,
	client: AxiosInstance
): Promise<Dragon> {
	const response: AxiosResponse<any> = await client.get(`${path}/${id}`);
	return decode(response.data);
}

export async function queryDragons(
	client: AxiosInstance,
	params: QueryParameters
): Promise<Array<Dragon | null>> {
	const response: AxiosResponse<any> = await client.post(
		`${path}/query`,
		params
	);
	return response.data.map(i => decode(i)) ?? null;
}
