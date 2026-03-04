const express = require('express');
const router = express.Router();
const youtubeService = require('../services/youtubeService');

router.get('/auth-url', (req, res) => {
  const url = youtubeService.getAuthUrl();
  res.json({ url });
});

router.get('/callback', (req, res) => {
  const { code } = req.query;
  res.send(`Callback YouTube recebido com code=${code || 'nenhum'} (simulado).`);
});

router.get('/channel-stats/:channelId', (req, res) => {
  const { channelId } = req.params;
  const stats = youtubeService.getFakeChannelStats(channelId);
  res.json(stats);
});

module.exports = router;
