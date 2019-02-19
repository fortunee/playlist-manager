import faker from 'faker';

import models from 'app/models';

/**
 * Generate an object which contains attributes needed
 * to successfully create a user instance.
 */
const user = async (props = {}) => {
  const defaultUser = {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  };

  return Object.assign({}, defaultUser, props);
};

/**
 * Generates a user instance from the properties provided.
 */
export default async (props = {}) =>
  models.User.create(await user(props));