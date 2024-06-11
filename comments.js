// Create web server
const express = require('express');
const app = express();
// Create a route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});
// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: index.js
// Import express
const express = require('express');
// Create express application
const app = express();
// Create a route
app.get('/', (req, res) => {
  res.send('Home page');
});
// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: index.js
// Import express
const express = require('express');
// Create express application
const app = express();
// Create a route
app.get('/', (req, res) => {
  res.send('Home page');
});
// Create a route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});
// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: index.js
// Import express
const express = require('express');
// Create express application
const app = express();
// Create a route
app.get('/', (req, res) => {
  res.send('Home page');
});
// Create a route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});
// Create a route
app.get('/about', (req, res) => {
  res.send('About page');
});
// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Path: index.js
// Import express
const express = require('express');
// Create express application
const app = express();
// Create a route
app.get('/', (req, res) => {
  res.send('Home page');
});
// Create a route
app.get('/comments', (req, res) => {
  res.send('Comments page');
});
// Create a route
app.get('/about', (req, res) => {
  res.send('About page');
});
// Create a route
app.get('/contact', (req, res) => {
  res.send('