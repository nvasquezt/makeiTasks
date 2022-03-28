const {
    getAllTasks,
    getTaskById,
    createTask,
    deleteTask,
    patchtask
} = require('./task.service');

async function handlerAllTasks(req, res) {
    const tasks = await getAllTasks();
    res.json(tasks);
}

async function handlerTaskById(req, res) {
    const { id } = req.params;
    const task = await getTaskById(id);

    if (!task) {
        res.status(404).json({
            message: `Task with id ${id} not found`
        });
    }

    res.json(task);
}

function handlerCreateTask (req, res) {
    const { body } = req;
    const task = createTask(body);
    res.json(task);
}

function handlerDeleteTask (req,res){
    const { id } = req.params;
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
    const { id } = req.params;
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
