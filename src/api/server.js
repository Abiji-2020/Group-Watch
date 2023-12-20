// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Placeholder data (replace with your database logic)
const watchParties = {};

// API endpoint to create a watch party session
app.post('/api/create-watchparty', (req, res) => {
  const { name } = req.body;
  const sessionId = generateSessionId();
  const participantId = generateParticipantId();

  // Store watch party information
  watchParties[sessionId] = {
    videoUrl: '', // Add video URL when available
    participants: [{ id: participantId, name }],
  };

  res.json({ sessionId, participantId });
});

// API endpoint to get watch party details
app.get('/api/watchparty/:sessionId', (req, res) => {
  const { sessionId } = req.params;

  if (watchParties[sessionId]) {
    res.json(watchParties[sessionId]);
  } else {
    res.status(404).json({ error: 'Watch party not found' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on por ruygubgat ${PORT}`);
});

function generateSessionId() {
  return Math.random().toString(36).substring(7);
}

function generateParticipantId() {
  return Math.random().toString(36).substring(7);
}
