const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const logs = [];

app.post('/ingest', (req, res) => {
  const log = req.body;
  logs.push(log);
  res.status(201).send('Log ingested successfully');
});

app.listen(PORT, () => {
  console.log(`Log Ingestor listening on port ${PORT}`);
});
