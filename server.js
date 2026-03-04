const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: '🎸 BandSync API 2.0 ONLINE!' });
});

// Instagram
app.get('/instagram/auth-url', (req, res) => {
  res.json({ url: 'https://instagram.com/oauth/simulado' });
});

app.get('/instagram/insights/:profileId', (req, res) => {
  const { profileId } = req.params;
  res.json({
    profileId,
    followers: 12345,
    recommendation: 'Postar 1 reel/dia'
  });
});

// YouTube
app.get('/youtube/auth-url', (req, res) => {
  res.json({ url: 'https://accounts.google.com/oauth/simulado' });
});

app.get('/youtube/channel-stats/:channelId', (req, res) => {
  const { channelId } = req.params;
  res.json({
    channelId,
    subscribers: 6789,
    recommendation: '3 shorts/semana'
  });
});

// Spotify
app.get('/spotify/auth-url', (req, res) => {
  res.json({ url: 'https://spotify.com/oauth/simulado' });
});

app.get('/spotify/artist-stats/:artistId', (req, res) => {
  const { artistId } = req.params;
  res.json({
    artistId,
    monthlyListeners: 25000,
    recommendation: 'Criar playlist'
  });
});

// IA Conteúdo
app.post('/content/suggest', (req, res) => {
  res.json({
    melhorPostAgora: {
      tipo: 'reel',
      titulo: 'Riff que explode feed',
      legenda: 'Novo single no Spotify!',
      hashtags: ['#metalcore']
    }
  });
});

app.post('/automations', (req, res) => {
  res.json({
    id: 1,
    status: 'scheduled',
    type: 'engagement'
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 BandSync 2.0: http://localhost:${PORT}`);
});
