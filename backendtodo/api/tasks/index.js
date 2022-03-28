const { Router } = require('express');
const { 
    handlerAllTasks,
    handlerTaskById,
    handlerCreateTask,
    handlerDeleteTask,
    handlerUpdateTask
} = require('./task.controller');

const router = Router();

router.get('/', handlerAllTasks);
router.get('/:id', handlerTaskById); 
router.post('/', handlerCreateTask);
router.delete('/:id', handlerDeleteTask);
router.patch('/:id', handlerUpdateTask);

module.exports = router;