const express = require("express");
const app = express();
const IP = require('ip');
var requestIp = require('request-ip');
var useragent = require('express-useragent');
app.use(useragent.express());

app.get('/', (req, res) => {
    const ipObject = {
      ipAddress: IP.address(),
      reqIPAddress: requestIp.getClientIp(req),
      userAgent: req.userAgent
    }
    res.send(ipObject)
})
const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;