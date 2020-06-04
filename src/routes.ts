import express from 'express';

// Controllers
import TweetController from './controllers/TweetController';

const routes = express.Router();

routes.use(TweetController);

export default routes;