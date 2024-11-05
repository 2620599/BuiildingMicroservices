const express = require('express');
const app = express();
const port = 3001;

const videos = [
  { id: 1, title: 'Introduction to Docker' },
  { id: 2, title: 'Microservices with Node.js' }
];

app.get('/', (req, res) => {
  res.send('Welcome to the Video Service!');
});

app.get('/videos', (req, res) => {
  res.json(videos);
});

app.use((req, res) => {
  res.status(404).send('404 - Not Found');
});

app.listen(port, () => {
  console.log(`Video Service running on port ${port}`);
});
