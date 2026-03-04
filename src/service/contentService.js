const suggestContent = ({ socialAccountId, objetivo, horizonteDias }) => ({
  socialAccountId,
  objetivo,
  horizonteDias: horizonteDias || 7,
  melhorPostAgora: {
    tipo: 'reel',
    titulo: 'Esse riff vai explodir teu feed',
    legenda: 'Trecho do novo single + CTA pra Spotify.',
    hashtags: ['#metalcore', '#novosingle'],
    horarioSugerido: '19:00'
  }
});

const generatePost = ({ tipo, tema }) => ({
  tipo,
  tema,
  titulo: `Post sobre ${tema}`,
  legenda: `Texto sobre ${tema} com CTA.`,
  hashtags: ['#music', '#bandsync']
});

module.exports = {
  suggestContent,
  generatePost
};
