import * as spacex from '..';

const client = spacex.createClient();

test('listCrew returns an array of crew members', async () => {
	const crew = await spacex.listCrew(client);
	expect(crew.length).toBeGreaterThan(0);
});

test('getCrewById returns a crew member', async () => {
	const crew = await spacex.listCrew(client);
	const ids = crew.map(i => i.id);
	const member = await spacex.getCrewMemberById(ids[0], client);
	expect(member.id).toBe(ids[0]);
});
