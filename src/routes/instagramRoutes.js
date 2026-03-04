const express = require('express');
const router = express.Router();
const instagramService = require('../services/instagramService');

router.get('/auth-url', (req, res) => {
  const url = instagramService.getAuthUrl();
  res.json({ url });
});

router.get('/callback', (req, res) => {
  const { code } = req.query;
  res.send(`Callback Instagram recebido com code=${code || 'nenhum'} (simulado).`);
});

router.get('/insights/:profileId', (req, res) => {
  const { profileId } = req.params;
  const insights = instagramService.getFakeInsights(profileId);
  res.json(insights);
});

module.exports = router;
