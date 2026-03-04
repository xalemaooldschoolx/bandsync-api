const getAuthUrl = () => 'https://accounts.spotify.com/authorize?client_id=SIMULADO';

const getFakeArtistStats = (artistId) => ({
  artistId,
  monthlyListeners: 25000,
  streamsLast28d: 180000,
  topTrack: 'Seu Single Principal',
  recommendation: 'Criar playlist e impulsionar via Reels.'
});

module.exports = {
  getAuthUrl,
  getFakeArtistStats
};
