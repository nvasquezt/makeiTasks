const logger = require('morgan');
logger.token('body', (req, res) => JSON.stringify(req.body));
/*
Vea tokens es un objeto con atributos predeterminados
tokens['response-time'](req, res) => lo hacen porque tokens.response-time no llama bien al atributo
tokens.body se creo en la linea 5
*/
app.use(logger((tokens, req, res) => {

    if(req.method === 'POST') {
        return [tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms',
            tokens.body(req, res)
        ].join(' ')
    }
    else {
        return [tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
        ].join(' ');
    }
}));
app.use(express.json());

const callLog = [
    {
        id: 1,
        name: 'Arto Hellas',
        number: '040-123456'
    },
    {
        id: 2,
        name: 'Ada Lovelace',
        number: '39-44-5323523'
    },
    {
        id: 3,
        name: 'Dan Abramov',
        number: '12-43-234345'
    },
    {
        id: 4,
        name: 'Mary Poppendick',
        number: '39-23-6423122'
    }
]

app.get('/api/persons', (req, res) => {
    res.json(callLog);
})

app.get('/api/persons/:id', (req, res) => {
    const person = callLog.find((person) => person.id === Number(req.params.id));
    if(!person) {
        res.status(404).send('<h1>ERROR NOT FOUND 404</h1>');
    }
    else {
        res.send(person);
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const position = callLog.findIndex((person) => person.id === Number(req.params.id));
    const copy = [...callLog];

    if(position === -1) {
        res.status(404).send('<h1>ERROR NOT FOUND 404</h1>');
    }
    else {
        copy.splice(position, 1);
        res.json(copy);
    }
})

app.post('/api/persons', (req, res) => {
    const id = Math.floor(Math.random() * 999999999999);
    const person = {
        id,
        ...req.body
    }

    if(!person.name || !person.number) {
        return res.status(400).json({ error: 'information incomplete' });
    }

    if(callLog.find((element) => element.name === person.name)) {
        return res.status(400).json({ error: 'name must be unique' });
    }
    
    callLog.push(person);
    res.redirect('/api/persons');
})

app.get('/info', (req, res) => {
    res.send(`
        <p>Phonebook has info for ${callLog.length} people</p>
        <p>${new Date()}</p>
    `)
})

const port = process.env.PORT || 3001;
app.listen(port)