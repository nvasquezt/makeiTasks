'use strict'
const express = require('express');
const { json } = require('express/lib/response');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan((tokens, req, res) => {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        JSON.stringify(req.body)
    ].join(' ');
}));

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

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/api/tasks/:id', (req, res) => {
    const id = req.params.id;
    const task = tasks.find(task => task.id === parseInt(id));
    if (!task) {
        res.status(404).send({message: `Task with id ${id} not found`});
    } else {
        res.json(task);
    }
});

app.post('/api/tasks', (req, res) => {
    const task = req.body;
    return res.json(task);
});

app.delete('api/tasks/:id', (req,res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id)
});

app.patch('/api/tasks/:id', (req, res) => {
    const id = Number(req.params.id);
    const task = tasks.find(task => task.id === id);
    if (!task) {
        res.status(404).send({message: `Task with id ${id} not found`});
    } else {
        const updatedTask = {
            ...task,
            ...req.body
        };
        tasks.splice(tasks.indexOf(task), 1, updatedTask);
        res.json(tasks);
    }
});

const port= process.env.PORT || 3001;
app.listen(port);

console.log(`server running at http://localhost:${port}/`);
