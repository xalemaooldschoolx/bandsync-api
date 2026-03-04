const express = require('express');
const router = express.Router();
const contentService = require('../services/contentService');

router.post('/suggest', async (req, res) => {
  const { socialAccountId, objetivo, horizonteDias } = req.body;
  const suggestion = await contentService.suggestContent({
    socialAccountId,
    objetivo,
    horizonteDias
  });
  res.json(suggestion);
});

router.post('/generate-post', async (req, res) => {
  const { tipo, tema } = req.body;
  const post = await contentService.generatePost({ tipo, tema });
  res.json(post);
});

module.exports = router;
