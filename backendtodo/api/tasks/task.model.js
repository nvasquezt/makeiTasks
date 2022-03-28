const mongooose = require('mongoose');

const TaskSchema = new mongooose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Task = mongooose.model('Task', TaskSchema);

module.exports = Task;