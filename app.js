const express = require('express');
const app = express();

const log4js = require('log4js');
const logger = log4js.getLogger();

const { Pool, Client } = require('pg')
// pools will use environment variables
// for connection information
const pool = new Pool()

const port = 3000;

logger.level = "info";

log4js.configure({
  appenders: { out: { type: 'stdout', layout: { type: 'basic' } } },
  categories: { default: { appenders: ['out'], level: 'info' } }
});


app.get('/', (req, res) => {
  pool.query('SELECT NOW()', (err, result) => {
    if (err != null) {
      logger.error(err)
      return
    }

    logger.info("Current time is:", result.rows[0].now)
  })
  logger.info("Hello World");
  res.send('Hello World!');
})

app.listen(port, () => {
  logger.info(`Example app listening at http://localhost:${port}`);
})

process.on('SIGTERM', () => {
  server.close(() => {
    pool.end
    logger.info("Stop the server gracefully")
  })
});
