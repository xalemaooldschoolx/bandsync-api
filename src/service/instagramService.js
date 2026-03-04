const getAuthUrl = () => 'https://instagram.com/oauth/simulado';

const getFakeInsights = (profileId) => ({
  profileId,
  followers: 12345,
  impressions7d: 54321,
  bestPostType: 'reel',
  recommendation: 'Postar 1 reel por dia com CTA para Spotify.'
});

module.exports = {
  getAuthUrl,
  getFakeInsights
};
