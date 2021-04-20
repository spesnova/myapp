const express = require('express');
const log4js = require('log4js');
const logger = log4js.getLogger();
const app = express();
const port = 3000;

logger.level = "info";


app.get('/', (req, res) => {
  logger.info("Hello World")
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
