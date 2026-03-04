const getAuthUrl = () => 'https://accounts.google.com/o/oauth2/v2/auth?client_id=SIMULADO';

const getFakeChannelStats = (channelId) => ({
  channelId,
  subscribers: 6789,
  viewsLast28d: 120000,
  bestContentType: 'short',
  recommendation: 'Publicar shorts 3x por semana.'
});

module.exports = {
  getAuthUrl,
  getFakeChannelStats
};
