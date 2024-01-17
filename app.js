const express = require("express");
const app = express();
var requestIp = require('request-ip');
var expressUseragent = require('express-useragent');
app.use(expressUseragent.express());

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const ipObject = {
    reqIPAddress: requestIp.getClientIp(req),
    userAgent: req.useragent
  }
  res.send(ipObject)
})
const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;