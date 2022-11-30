const express = require('express');

const port = 8080;

const app = express();

class List {
    constructor(name) {
        this.name = name;
        this.content = [];
    }
}

const lists = [];

app.get('/', (req, res) => {
    res.send('ToDoList service is up and running');
});

app.post('/todolist', (req, res) => {
    if(req.body.name === undefined) {
        res.status(402).send();
    } else {
        lists.push(new List(req.body.name));
        res.send();
    }
});

app.get('*', (req, res) => {
    res.status(404).send();
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
