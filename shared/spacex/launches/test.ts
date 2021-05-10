import { createClient } from '../index';
import {
	listLaunches,
	listPastLaunches,
	listUpcomingLaunches,
	getLaunchById,
	getLatestLaunch,
	getNextLaunch,
} from './index';
import type { Launch } from './interfaces';

const client = createClient();

test('returns an array of launches', async () => {
	const dtos: Array<Launch> = await listLaunches(client);
	console.log(dtos);
	expect(dtos.length).toBeGreaterThan(0);
});

test('returns an array of launch', async () => {
	const dtos: Array<Launch> = await listPastLaunches(client);
	expect(dtos.length).toBeGreaterThan(0);
});

test('returns an array of launch', async () => {
	const dtos: Array<Launch> = await listUpcomingLaunches(client);
	expect(dtos.length).toBeGreaterThan(0);
});

test('returns a launch', async () => {
	const dtos: Array<Launch> = await listLaunches(client);
	const ids: Array<string> = dtos.map(i => i.id);
	const dto: Launch = await getLaunchById(ids[0], client);
	expect(dto.id).toBe(ids[0]);
});

test('returns a launch', async () => {
	const dto: Launch = await getLatestLaunch(client);
	expect(dto.id).toBeDefined();
});

test('returns a launch', async () => {
	const dto: Launch = await getNextLaunch(client);
	expect(dto.id).toBeDefined();
});
