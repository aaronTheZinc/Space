import * as spacex from '..';

const client = spacex.createClient();

test('listCores returns an array of cores', async () => {
	const cores = await spacex.listCores(client);
	expect(cores.length).toBeGreaterThan(0);
});

test('getCoresById returns a core', async () => {
	const cores = await spacex.listCores(client);
	const ids = cores.map(i => i.id);
	const core = await spacex.getCoreById(ids[0], client);
	expect(core.id).toBe(ids[0]);
});
