const {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    patchtask
} = require('./task.service');

function handlerAllTasks(req, res) {
    const tasks = getAllTasks();
    res.json(tasks);
}

function handlerTaskById(req, res) {
    const id = Number(req.params.id);
    const task = getTaskById(id);
    res.json(task);
}

function handlerCreateTask (req, res) {
    const { body } = req;
    const task = createTask(body);
    res.json(task);
}

function handlerDeleteTask (req,res){
    const id = Number(req.params.id);
    const task = deleteTask(id);
    if (!task) {
        res.status(404).json({
            message: `Task with id ${id} not found`
        });
    } else {
        res.json(task);
    }
}

function handlerUpdateTask(req, res){
    const id = Number(req.params.id);
    const { body } = req;
    const task = patchtask(id, body);
    if (!task) {
        return res.status(404).json({
            message: 'Task not found'
        });
    } else {
        res.json(task);
    }
}

module.exports = {
    handlerAllTasks,
    handlerTaskById,
    handlerCreateTask,
    handlerDeleteTask,
    handlerUpdateTask
};
