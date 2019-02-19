import { expect } from 'chai';

import models from 'app/models';

import factories from '../factories';
import truncate from '../truncate';

describe('User model', () => {
  let user;

  // Clear DB before each test
  beforeEach(async () => {
    await truncate();
    user = await factories.user();
  });

  // Clear DB after all tests
  after(() => {
    truncate();
  })

  it('should generate a user from the factory', async () => {
    expect(user.id).to.exist;
  });

  it('should truncate the user table with each test', async () => {
    const count = await models.User.count();
    expect(count).to.equals(1);
  });
});