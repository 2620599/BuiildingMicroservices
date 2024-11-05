const express = require('express');
const app = express();
const port = 3000;

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];  

// Root route to avoid "Cannot GET /" error
app.get('/', (req, res) => {
  res.send('Welcome to the User Service!'); // Message displayed at root URL
});

// Users route to list all users
app.get('/users', (req, res) => {
  res.json(users);
});

// Start server and listen on port 3000
app.listen(port, () => {
  console.log(`User Service running on port ${port}`);
});
