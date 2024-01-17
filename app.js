const express = require("express");
const app = express();
const IP = require('ip');

app.get('/', (req, res) => {
    console.log(req.ip)
    const ipObject = {
      ipAddress: IP.address(),
      reqIpAddress: req.ip
      // isPrivate: IP.isPrivate(ipAddress),
      // isPublic: IP.isPublic(ipAddress),
      // isV4Format: IP.isV4Format(ipAddress),
      // isV6Format: IP.isV6Format(ipAddress)
    }
    res.send(ipObject)
})
const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;