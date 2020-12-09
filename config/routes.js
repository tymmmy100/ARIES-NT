'use strict'

const path = require('path');

module.exports = {
    initRoutes: initRoutes
}

function initRoutes(app) {
    const routesPath = path.join(__dirname, '../app/routes');
    console.log('routesPath', routesPath);

    const routes = ['users', 'books'];

    routes.forEach(function(route) {
        app.use('/api', require(`${routesPath}/${route}`));
    })
}