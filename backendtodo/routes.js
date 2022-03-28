/**
 * Main routes file
 */

const helloWorld = require('./api/helloWorld');
const tasks = require('./api/tasks');

function routes(app) {
    app.use('/api/helloworld', helloWorld);
    app.use('/api/tasks', tasks);
}

module.exports = routes;