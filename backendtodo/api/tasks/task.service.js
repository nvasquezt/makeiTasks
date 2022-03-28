const tasks = [
    {
        id: 1,
        title: 'Task 1',
        description: "Description 1",
        completed: true,
    },
    {
        id: 2,
        title: 'Task 2',
        description: "Description 2",
        completed: false,
    },
    {
        id: 3,
        title: 'Task 3',
        description: "Description 3",
        completed: false,
    },
];

function getAllTasks () {
    return tasks;
}

function getTaskById (id) {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        throw new Error(`Task with id ${id} not found`);
    }
    return task;
}

function createTask (task) {
    tasks.push(task);
    return task;
}

function deleteTask (id) {
    const task = tasks.find(task => task.id === id);
    if (!task) {
        return null;
    }
    tasks.splice(tasks.indexOf(task), 1);
    return task;
}

function patchtask (id, task) {
    const taskToUpdate = tasks.find(task => task.id === id);
    if (!taskToUpdate) {
        return null;
    }
    Object.assign(taskToUpdate, task);
    return taskToUpdate;
}

module.exports = {  
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    patchtask
};