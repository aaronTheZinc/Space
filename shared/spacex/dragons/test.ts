import * as spacex from '..';

const client = spacex.createClient();

test('listDragons returns an array of dragons', async () => {
	const dragons = await spacex.listDragons(client);
	expect(dragons.length).toBeGreaterThan(0);
});

test('getDragonById returns a dragon', async () => {
	const dragons = await spacex.listDragons(client);
	const ids = dragons.map(i => i.id);
	const dragon = await spacex.getDragonById(ids[0], client);
	expect(dragon.id).toBe(ids[0]);
});
