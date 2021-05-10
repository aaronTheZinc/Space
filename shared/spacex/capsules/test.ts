import { createClient } from '../index'
import { listCapsules, getCapsuleById } from './index'
import type { Capsule } from './interfaces'

const client = createClient();

test('listCapusules returns an array of capsules', async () => {
  const capsules: Array<Capsule> = await listCapsules(client);
  expect(capsules.length).toBeGreaterThan(0);
});

test('getCapusuleById returns a capsule', async () => {
  const capsules: Array<Capsule> = await listCapsules(client);
  const capsule = await getCapsuleById(capsules[0].id, client);
  expect(capsule).toEqual(capsules[0]);
});
