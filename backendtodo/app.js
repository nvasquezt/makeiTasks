'use strict'
require('dotenv').config()

const express = require('express');

const configureExpress = require('./config/express');
const connectDB = require('./config/database');
const routes = require('./routes');

const app = express();

connectDB();
configureExpress(app);
routes(app);

// const url = process.env.MONGODB_URI;
// mongooose.connect(url);

// const TaskSchema = new mongooose.Schema({
//     title: String,
//     description: String,
//     completed: Boolean
// });

// const Task = mongooose.model('Task', TaskSchema);


// const task = new Task({
//     title: 'Comprar pan',
//     description: 'Comprar pan para el desayuno',
//     completed: false,
    
// }); 

// Task.findById('62415feff77278d86a65b576', (err, task) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(task);
//     }
// });


const port= process.env.PORT || 3031;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
