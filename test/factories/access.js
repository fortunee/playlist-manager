import faker from 'faker';

import models from 'app/models';

/**
 * Generate an object which contains attributes needed
 * to successfully create a access instance.
 */
const access = async (props = {}) => {
  const defaultAccess = {
    playlistId: props.playlistId, // Since this is an associated property
    accessCode: props.playlistAccessCode, // Since we want this to be assigned
  };

  return Object.assign({}, defaultAccess, props);
};

/**
 * Generates a user instance from the properties provided.
 */
export default async (props = {}) =>
  models.Access.create(await access(props));