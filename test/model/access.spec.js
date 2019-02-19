import { expect } from 'chai';

import models from 'app/models';

import factories from '../factories';
import truncate from '../truncate';

describe('Access model', () => {
  let user, playlist, access;

  // Clear DB before each test
  beforeEach(async () => {
    await truncate();
    user = await factories.user();
    playlist = await factories.playlist({
      userId: user.id
    });
    access = await factories.access({
      playlistId: playlist.id,
      accessCode: '12345'
    });
  });

  // Clear DB after all tests
  after(() => {
    truncate();
  })

  it('should generate a user from the factory', async () => {
    expect(user.id).to.exist;
  });

  it('should generate a playlist from the factory', async () => {
    expect(playlist.id).to.exist;
  });

  it('should generate an access from the factory', async () => {
    expect(access.id).to.exist;
  });

  it('should have the access playlist id as the playlist id specified', async () => {
    expect(access.playlistId).to.equals(playlist.id);
  });

  it('should truncate the access table with each test', async () => {
    const count = await models.Access.count();
    expect(count).to.equals(1);
  });
});