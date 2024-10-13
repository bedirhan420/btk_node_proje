const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

let routes = fs.readdirSync(path.join(__dirname));

for (const route of routes) {
    if (route.endsWith(".js") && route !== "index.js") {
        let routeEndpoint = route.replace("Router.js", "").toLowerCase();
        let routePath = path.join(__dirname, route);

        let requiredRoute = require(routePath);
        console.log('Loaded route:', routePath, 'Type:', typeof requiredRoute);

        if (typeof requiredRoute === 'function') {
            router.use("/" + routeEndpoint, requiredRoute);
        } else {
            console.error(`Error: ${routePath} does not export a valid middleware function`);
        }
    }
}


module.exports = router;
