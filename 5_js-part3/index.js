const express = require('express');
const pg = require('pg')
const cors = require('cors')

const dbPool = new pg.Pool({
    user: 'postgres',
    password: 'postgres',
    port: 5432,
    host: '127.0.0.1',
    database: 'catfactdb'
});

const port = 3000;
const app = express();

// HELPER FUNCTIONS
function executeSelectQuery(sqlQuery) {
    return new Promise((resolve, reject) => {
        dbPool.query(sqlQuery, (error, result) => {
            if(error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 function getRandomFact(factRows) {
    const upperBound = factRows.length - 1;
    const lowerBound = 0;

    return factRows[getRandomInt(lowerBound, upperBound)];
 }

 // MIDDLEWARE
 app.use(cors());
 app.use(express.json());
 app.use((request, response, next) => {
    console.log(`--> Received a ${request.method} on ${request.originalUrl}`);
    next();
 });

 // ROUTES
app.get('/randomfact', (request, response) => {
    executeSelectQuery('SELECT * FROM fact')
        .then(result => {
            response.send(getRandomFact(result.rows));
        })
        .catch(error => response.status(500).send(`Error while querying db: ${JSON.stringify(error)}`));
});

app.post('/randomfact', (request, response) => {
    if(!request.body.fact) {
        response.status(400).send('The "fact" property is missing from your request body');
        return;
    }

    dbPool.query('INSERT INTO fact (catfact) VALUES ($1)', [request.body.fact], (error, result) => {
        if(error) {
            response.status(500).send(error);
        } else {
            response.send('Added fact successfully');
        }
    });
});

app.get('/testdb', (request, response) => {
    executeSelectQuery('SELECT * FROM fact')
        .then(result => response.send(result))
        .catch(error => response.status(500).send(`Error while querying db: ${JSON.stringify(error)}`));
});

app.get('/', (request, response) => {
    response.send('hello! our sample server is running');
});

app.listen(port, () => {
    console.log('Web server is now running on port ' + port);
});
