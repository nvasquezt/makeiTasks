const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        JSON.stringify(req.body)
    ].join(' ');
}));

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`Listening on port ${port}`);

const persons = [
    {
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
];

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>`);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);
    if (person) {
        res.json(person);
    } else {
        res.status(404).end();
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);
    persons.splice(persons.indexOf(person), 1);
    return res.status(204).end();
});

app.post('/api/persons', (req, res) => {
    const newPerson = req.body;
    if(!newPerson.name || !newPerson.number) {
        return res.status(400).json({ error: 'name or number missing' });
    }else{
        const person = persons.find(person => person.name === newPerson.name);
        if(person){
            return res.status(400).json({ error: 'name must be unique' });
        }
        newPerson.id = Math.floor(Math.random() * 100000);
        persons.push(newPerson);
        return res.json(newPerson);
    }
});


