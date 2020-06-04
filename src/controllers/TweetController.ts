import express from 'express';

import Tweet from '../schemas/Tweet';

const router = express.Router();

router.get('/test', (request, response) => {
  let tweetWillBeSaved = new Tweet({ title: "Olá isso é um teste", description: "description test" });

  tweetWillBeSaved.save().then(saved => {
    return response.json(saved);
  });
});

export default router;