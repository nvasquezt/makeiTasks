const { Router } = require('express');
const {
    handlerAllTasks,
    handlerTaskById,
    handlerCreateTask,
    handlerDeleteTask,
    handlerUpdateTask
} = require('./task.controller');
const { isAuth } = require('../../auth/auth.service');

const router = Router();

router.get('/', isAuth, handlerAllTasks);
router.get('/:id', handlerTaskById);
router.post('/', isAuth, handlerCreateTask);
router.delete('/:id', handlerDeleteTask);
router.patch('/:id', handlerUpdateTask);

module.exports = router;
