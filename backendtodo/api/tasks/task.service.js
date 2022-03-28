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
    // tasks.push(task);
    // return task;
}

function deleteTask (id) {
    // const task = TaskModel.findById(id);
    // if (!task) {
    //     return null;
    // }
    // tasks.splice(tasks.indexOf(task), 1);
    // return task;
}

function patchtask (id, task) {
    // const taskToUpdate = task.find(task => task.id === id);
    // if (!taskToUpdate) {
    //     return null;
    // }
    // Object.assign(taskToUpdate, task);
    // return taskToUpdate;
}

module.exports = {  
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    patchtask
};