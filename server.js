// Install express server
import express from 'express';
import bodyParser from 'body-parser';
import models from './app/models';


const app = express();
const router = express.Router();

// setup body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// Sync sequelize db models
models.sequelize.sync().then(() => {
  console.log('Database server synced');
}).catch(() => {
  console.log('Database server could not be synced');
})

// start the app by using heroku port
app.listen(port, () => {
  console.log('App started on port: ' + port);
});