const express = require('express');
const router = express.Router();
const spotifyService = require('../services/spotifyService');

router.get('/auth-url', (req, res) => {
  const url = spotifyService.getAuthUrl();
  res.json({ url });
});

router.get('/callback', (req, res) => {
  const { code } = req.query;
  res.send(`Callback Spotify recebido com code=${code || 'nenhum'} (simulado).`);
});

router.get('/artist-stats/:artistId', (req, res) => {
  const { artistId } = req.params;
  const stats = spotifyService.getFakeArtistStats(artistId);
  res.json(stats);
});

module.exports = router;
