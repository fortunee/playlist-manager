import { expect } from 'chai';

import models from 'app/models';

import factories from '../factories';
import truncate from '../truncate';

describe('Playlist model', () => {
  let user, playlist;

  // Clear DB before each test
  beforeEach(async () => {
    await truncate();
    user = await factories.user();
    playlist = await factories.playlist({
      userId: user.id
    });
  });

  // Clear DB after all tests
  after(() => {
    truncate();
  })

  it('should generate a user from the factory', async () => {
    expect(user.id).to.exist;
  });

  it('should generate the playlist from the factory', async () => {
    expect(playlist.id).to.exist;
  });

  it('should ensure the playlist is owned by the user', async () => {
    expect(playlist.userId).to.equals(user.id);
  });

  it('should truncate the playlist table with each test', async () => {
    const count = await models.Playlist.count();
    expect(count).to.equals(1);
  });
});