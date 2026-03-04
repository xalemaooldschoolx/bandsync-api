const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: '🎸 BandSync API 2.0 ONLINE!' });
});
  
  // Instagram REAL OAuth
app.get('/instagram/auth-url', (req, res) => {
  const instagramAuthUrl = "https://www.facebook.com/v20.0/dialog/oauth?client_id=832028183241524&redirect_uri=https://bandsync-api-production-b004.up.railway.app/instagram/callback&scope=instagram_basic,pages_show_list,instagram_manage_insights&response_type=code";
  res.json({ url: instagramAuthUrl });
  
app.get('/instagram/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'Código necessário' });
  res.json({ code, status: 'callback recebido, próximo: token exchange' });
});



app.get('/instagram/insights/:profileId', (req, res) => {
  // Instagram OAuth Callback - NOVA!
app.get('/instagram/callback', async (req, res) => {
  const { code } = req.query;
  if (!code) return res.status(400).json({ error: 'No code received' });
  
  try {
    const tokenResponse = await fetch(`https://graph.facebook.com/v20.0/oauth/access_token?client_id=832028183241524&client_secret=8831c1fd7f3ab2d838f6b4770ce77124&redirect_uri=https://bandsync-api-production-b004.up.railway.app/instagram/callback&code=${code}`);
    const tokenData = await tokenResponse.json();
    
    res.json({ 
      success: true, 
      access_token: tokenData.access_token,
      message: 'Instagram conectado!'
    });
  } catch (error) {
    res.status(500).json({ error: 'Token exchange failed' });
  }
});

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






