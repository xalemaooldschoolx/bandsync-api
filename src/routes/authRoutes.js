const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email } = req.body;
  res.json({
    token: 'fake-jwt-token',
    user: { id: 1, email: email || 'user@bandsync.com' }
  });
});

router.post('/register', (req, res) => {
  const { email } = req.body;
  res.json({
    id: 1,
    email,
    message: 'Usuário registrado (simulado).'
  });
});

module.exports = router;
