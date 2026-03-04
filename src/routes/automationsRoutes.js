const express = require('express');
const router = express.Router();
const automationsService = require('../services/automationsService');

router.post('/', (req, res) => {
  const { socialAccountId, type, params } = req.body;
  const job = automationsService.createFakeJob({ socialAccountId, type, params });
  res.json(job);
});

router.get('/', (req, res) => {
  const jobs = automationsService.listFakeJobs();
  res.json(jobs);
});

module.exports = router;
