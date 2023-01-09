const { query } = require('express');
const pg = require('pg');

const pool = new pg.Pool({
    host: "127.0.0.1",
    user: "postgres",
    password: "postgres",
    database: "weatherly",
    connectionTimeoutMillis: 5000,
});

class DbService {
    static testConnection() {
        return pool.connect().then((client) => client.release());
    }

    static handleQueryError(query, error) {
        console.error(`Error while trying to execute query ${query}\n${error}`);
        throw new Error(error);
    }

    static getAllLocations() {
        const queryStr = 'SELECT * FROM location';
        return pool.query(queryStr).catch(err => this.handleQueryError(queryStr, err));
    }

    static insertLocation(name, latitude, longitude) {
        const queryStr = 'INSERT INTO location (name, latitude, longitude) VALUES ($1, $2, $3)';
        return pool.query(queryStr, [name, latitude, longitude]).catch(err => this.handleQueryError(queryStr, err));
    }

    static deleteLocation(id) {
        const queryStr = 'DELETE FROM location WHERE id = ($1)';
        return pool.query(queryStr, [id]).catch(err => this.handleQueryError(queryStr, err));
    }
}

module.exports = DbService;
