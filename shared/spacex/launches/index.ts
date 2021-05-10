import type { AxiosInstance } from 'axios';
import type { QueryParameters } from '../';
import type { Launch } from './interfaces'

const path = '/launches';

export async function listLaunches(
  client: AxiosInstance
): Promise<Array<Launch>> {
  const response = await client.get(path);
  console.log(typeof response);
  return response.data.map((i: object) => i as Launch);
}

export async function listPastLaunches(
  client: AxiosInstance
): Promise<Array<Launch>> {
  const response = await client.get(`${path}/past`);
  return response.data.map((i: object) => i as Launch);
}

export async function listUpcomingLaunches(
  client: AxiosInstance
): Promise<Array<Launch>> {
  const response = await client.get(`${path}/upcoming`);
  return response.data.map((i: object) => i as Launch);
}

export async function getLaunchById(
  id: string,
  client: AxiosInstance
): Promise<Launch> {
  const response = await client.get(`${path}/${id}`);
  return response.data as Launch;
}

export async function getLatestLaunch(client: AxiosInstance): Promise<Launch> {
  const response = await client.get(`${path}/latest`);
  return response.data as Launch;
}

export async function getNextLaunch(client: AxiosInstance): Promise<Launch> {
  const response  = await client.get(`${path}/next`);
  return response.data as Launch;
}

export async function queryLaunches(
  client: AxiosInstance,
  params: QueryParameters
): Promise<Array<Launch | null>> {
  const response = await client.post(`${path}/query`, params);
  return response.data.map((i: object) => i as Launch) ?? null;
}
