import faker from 'faker';

import models from 'app/models';

/**
 * Generate an object which contains attributes needed
 * to successfully create a playlist instance.
 */
const playlist = async (props = {}) => {
  const defaultPlaylist = {
    name: faker.lorem.word(),
    url: faker.internet.url(),
    userId: props.userId // Since this is an associated property
  };

  return Object.assign({}, defaultPlaylist, props);
};

/**
 * Generates a user instance from the properties provided.
 */
export default async (props = {}) =>
  models.Playlist.create(await playlist(props));