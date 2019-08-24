'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('================  Welcome my first Nodejs Express Webapp ===============\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
