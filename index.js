const natural = require('natural');

const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');

function analyzeSentiment(text) {
  const tokenized = text.split(' ');
  const score = analyzer.getSentiment(tokenized);
  return score;
}

module.exports = analyzeSentiment;
