const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

let routes = fs.readdirSync(path.join(__dirname));

for (const route of routes) {
    if (route.includes(".js") && route !== "index.js") {
        let routePath = path.join(__dirname, route);
        router.use("/" + route.replace(".js", ""), require(routePath));
    }
}

module.exports = router;
