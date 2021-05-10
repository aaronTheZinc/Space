import type { AxiosInstance } from 'axios';
import type { QueryParameters } from '..';
import type { Capsule } from './interfaces';

const path = '/capsules';

export async function listCapsules(
  client: AxiosInstance
): Promise<Array<Capsule>> {
  const response = await client.get(path);
  return response.data.map((i: object) => i as Capsule);
}

export async function getCapsuleById(
  id: string,
  client: AxiosInstance
): Promise<Capsule> {
  const response = await client.get(`${path}/${id}`);
  return response.data as Capsule;
}

export async function queryCapsules(
  client: AxiosInstance,
  params: QueryParameters
): Promise<Array<Capsule | null>> {
  const response = await client.post(
	`${path}/query`,
  params
  );
  return response.data.map((i: object) => i as Capsule) ?? null;
}
