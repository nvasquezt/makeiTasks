/**
 * Main routes file
 */

const helloWorld = require('./api/helloWorld');
const tasks = require('./api/tasks');
const user= require('./api/user');

function routes(app) {
    app.use('/api/helloworld', helloWorld);
    app.use('/api/tasks', tasks);
    app.use('/api/user', user);
}

module.exports = routes;