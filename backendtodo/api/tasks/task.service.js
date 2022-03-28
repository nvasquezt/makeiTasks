const TaskModel = require ('./task.model');

async function getAllTasks () {
    return await TaskModel.find();
}

async function getTaskById (id) {
    const task = await TaskModel.findById(id);
    if (!task) {
        throw new Error(`Task with id ${id} not found`);
    }
    return task;
}

function createTask (task) {
    const newTask = new TaskModel(task);
    return newTask.save();
}

function deleteTask (id) {
    return TaskModel.findByIdAndDelete(id);
}

function patchtask (id, task) {
    return TaskModel.findByIdAndUpdate(id, task);
}


module.exports = {  
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    patchtask
};