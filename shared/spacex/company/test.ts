import * as spacex from '..';

const client = spacex.createClient();

test('getCompanyInfo returns a Company object', async () => {
	const company: spacex.Company = await spacex.getCompanyInfo(client);
	expect(company).toBeDefined();
});
