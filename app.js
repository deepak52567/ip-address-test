const express = require("express");
const app = express();
const IP = require('ip');
var requestIp = require('request-ip');
var expressUseragent = require('express-useragent');
app.use(expressUseragent.express());

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  const ipObject = {
    ipAddress: IP.address(),
    reqIPAddress: requestIp.getClientIp(req),
    userAgent: req.useragent || 'test'
  }
  res.send(ipObject)
})
const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;