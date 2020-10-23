# Playlist Manager
### test-prep
A playlist app where a user can create a playlist and only the user can view the playlist unless he grants any other user access to his playlist

### Steps:

- Create repository
- Clone repository locally
- Checkout to development branch
- Create directories app, settings and test
- Create file server.js
- Add a package.json file using `npm init`
- Install packages faker, supertest, mocha, chai, sequelize-cli, express, pg, dotenv
- Initialize sequelize using: `node_modules/.bin/sequelize init`
- Change config dialect and username to `postgres`
- Generate a user model using: `node_modules/.bin/sequelize model:create --name User --attributes "firstname:string, lastname:string, email:string, password:string"`
- Generate a playlist model using: `node_modules/.bin/sequelize model:create --name Playlist --attributes "name:string, userId:integer, url:string"`
- Generate a playlist model using: `node_modules/.bin/sequelize model:create --name Playlist --attributes "name:string, userId:integer, url:string"`
- Generate an access model using: `node_modules/.bin/sequelize model:create --name Access --attributes "playlistId:string, accessCode:integer"`
- Move the models and config folders into the app directory
- Create a factories directory in the test folder that shows the models specified
- Install `lodash` and `require-directory` to be used in the factories index.js file
- Add `index.js` file to factories, add `user.js`, `playlist.js` and `access.js` too.
- Add a `truncate.js` file in the test that clears the test DB once testing is finished
- TESTS should all fail (TDD): Add a model folder in the test and add `user.spec.js`, `playlist.spec.js` and `access.spec.js` model test
- Update the test command in the package.json file to `NODE_ENV=test mocha --exit --compilers js:babel-core/register --recursive`
- Install ALL babel plugins listed below:

    "babel-cli": "6.26.0",
    "babel-core": "^6.26.3",
    "babel-eslint": "8.2.6",
    "babel-plugin-istanbul": "^4.1.6",
    "babel-plugin-module-resolver": "3.1.1",
    "babel-plugin-root-import": "6.1.0",
    "babel-plugin-syntax-object-rest-spread": "6.13.0",
    "babel-plugin-transform-class-properties": "6.24.1",
    "babel-plugin-transform-es2015-modules-commonjs": "6.26.2",
    "babel-polyfill": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "babel-register": "^6.26.0",

- Add .babelrc file
- Add migration and migration rollback scripts to package.json
- Add migration and roolback commands to test command
- Update server.js file to setup express
- Install body-parser npm package to parse post request body
- Add start.js file to transpile the code using babel
- Update package.json start script to `node start.js`
- Run Test
