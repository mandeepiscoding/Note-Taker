const express = require('express');
const path = require('path');
const clog = require('./middleware/clog.js'); // Importing clog middleware
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Using clog middleware for logging requests
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Mounting API routes under '/api' prefix
app.use('/api', api);

// Serving static files from the 'public' directory
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);