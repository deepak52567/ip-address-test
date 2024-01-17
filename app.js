const express = require("express");
const app = express();
const IP = require('ip');

app.get('/', (req, res) => {
    const ipAddress = IP.address();
    console.log(IP.isPrivate(ipAddress))
    console.log(IP.isPublic(ipAddress))
    console.log(IP.isV4Format(ipAddress))
    console.log(IP.isV6Format(ipAddress))
    res.send(ipAddress)
})
const port = process.env.PORT || 3001;

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;